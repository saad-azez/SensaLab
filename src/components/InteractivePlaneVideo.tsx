import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import type { LenisScrollDetail } from "./types";

/**
 * InteractivePlaneVideo (STABLE VERSION)
 * -------------------------------------
 * - NO external video
 * - NO CORS issues
 * - NO auto-scroll
 * - NO render-on-load chaos
 * - Scroll-gated
 * - Safe shaders
 */
const InteractivePlaneVideo: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    /* ---------------- CAMERA ---------------- */
    const camera = new THREE.PerspectiveCamera(
      22,
      window.innerWidth / window.innerHeight,
      0.1,
      500
    );
    camera.position.set(0, 0, 80);

    /* ---------------- SCENE + RENDERER ---------------- */
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    /* ---------------- TEXTURES (LOCAL ONLY) ---------------- */
    const loader = new THREE.TextureLoader();

    // ⚠️ USE A LOCAL IMAGE — DO NOT HOTLINK
    const imageTexture = loader.load("../assets/images/1.avif");
    imageTexture.colorSpace = THREE.SRGBColorSpace;

    /* ---------------- GEOMETRY ---------------- */
    const geometry = new THREE.PlaneGeometry(36, 20, 64, 64);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: imageTexture },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uProgress: { value: 0 },
        uTime: { value: 0 },
      },
      transparent: true,
      depthWrite: false,
      vertexShader: `
        uniform float uProgress;
        uniform vec2 uMouse;
        varying vec2 vUv;

        void main() {
          vUv = uv;

          vec3 pos = position;

          float curve = sin(pos.x * 0.15) * 3.0;
          pos.z += curve * uProgress;

          pos.x += uMouse.x * 1.5;
          pos.y += uMouse.y * 1.0;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform float uProgress;
        varying vec2 vUv;

        void main() {
          vec4 tex = texture2D(uTexture, vUv);

          float fade =
            smoothstep(0.08, 0.14, uProgress) *
            (1.0 - smoothstep(0.32, 0.42, uProgress));

          gl_FragColor = vec4(tex.rgb, tex.a * fade);
        }
      `,
    });

    const plane = new THREE.Mesh(geometry, material);
    plane.visible = false;
    scene.add(plane);

    /* ---------------- INPUT ---------------- */
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    /* ---------------- SCROLL ---------------- */
    let targetScroll = 0;
    let currentScroll = 0;

    const onScroll = (e: Event) => {
      const detail = (e as CustomEvent<LenisScrollDetail>).detail;
      if (!detail) return;
      targetScroll = detail.progress;
    };

    window.addEventListener("lenis-scroll", onScroll);

    /* ---------------- LOOP ---------------- */
    const clock = new THREE.Clock();
    let rafId: number;

    const animate = () => {
      rafId = requestAnimationFrame(animate);

      currentScroll += (targetScroll - currentScroll) * 0.08;

      material.uniforms.uTime.value = clock.getElapsedTime();
      material.uniforms.uProgress.value = currentScroll;
      material.uniforms.uMouse.value.lerp(mouse.current, 0.08);

      // ONLY show in intended range
      if (currentScroll > 0.08 && currentScroll < 0.42) {
        plane.visible = true;
        renderer.render(scene, camera);
      } else {
        plane.visible = false;
      }
    };

    animate();

    /* ---------------- RESIZE ---------------- */
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    /* ---------------- CLEANUP ---------------- */
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("lenis-scroll", onScroll);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="interactive-plane" />;
};

export default InteractivePlaneVideo;
