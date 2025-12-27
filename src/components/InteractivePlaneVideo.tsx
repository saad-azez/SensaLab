import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import type { LenisScrollDetail } from "./types";

const InteractiveVideoPlane: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const video = document.createElement("video");
    video.src = "https://vjs.zencdn.net/v/oceans.mp4";
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;

    const startOnInteraction = () => {
      video.play().catch(() => { });
      window.removeEventListener("mousedown", startOnInteraction);
    };

    window.addEventListener("mousedown", startOnInteraction);
    video.play().catch(() => { });

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      22,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 80);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();

    // NOTE: this SHOULD be a local asset (handled elsewhere)
    const matcap = textureLoader.load(
      "https://raw.githubusercontent.com/nidorx/matcaps/master/512/3B3C3F_DAD9D5_929290_ABACAC.png"
    );
    matcap.colorSpace = THREE.SRGBColorSpace;

    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.colorSpace = THREE.SRGBColorSpace;

    const geometry = new THREE.BoxGeometry(35, 20, 0.5, 128, 1, 16);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uCurveRadius: { value: 32 },
        uMatcap: { value: matcap },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uProgress: { value: 0 },
        uTexture: { value: videoTexture },
        uTime: { value: 0 },
      },
      transparent: true,
      depthWrite: false,
      vertexShader: `...`,
      fragmentShader: `...`,
    });

    const tvMesh = new THREE.Mesh(geometry, material);
    tvMesh.visible = false;
    scene.add(tvMesh);

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    let targetScroll = 0;
    let currentScroll = 0;

    const onScroll = (e: Event) => {
      const detail = (e as CustomEvent<LenisScrollDetail>).detail;
      targetScroll = detail.progress;
    };
    window.addEventListener("lenis-scroll", onScroll);

    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      currentScroll += (targetScroll - currentScroll) * 0.1;
      material.uniforms.uTime.value = clock.getElapsedTime();
      material.uniforms.uProgress.value = currentScroll;
      material.uniforms.uMouse.value.lerp(mouse.current, 0.08);

      tvMesh.position.y =
        Math.sin(clock.getElapsedTime() * 0.5) * 0.5;

      if (currentScroll < 0.075 || currentScroll > 0.42) {
        tvMesh.visible = false;
      } else {
        tvMesh.visible = true;
        renderer.render(scene, camera);
      }
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("lenis-scroll", onScroll);
      window.removeEventListener("mousedown", startOnInteraction);
      cancelAnimationFrame(animId);

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }

      renderer.dispose();
      video.pause();
    };
  }, []);

  return <div ref={mountRef} className="interactive-video-plane" />;
};

export default InteractiveVideoPlane;
