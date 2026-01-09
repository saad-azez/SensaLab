
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import type { LenisScrollDetail } from "./types";

interface InteractiveVideoPlaneProps {
  progress?: number;
}

const InteractiveVideoPlane: React.FC<InteractiveVideoPlaneProps> = ({ progress = 0 }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const vignetteRef = useRef<HTMLDivElement>(null);
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
    const camera = new THREE.PerspectiveCamera(22, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 80);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const matcap = textureLoader.load("https://raw.githubusercontent.com/nidorx/matcaps/master/512/3B3C3F_DAD9D5_929290_ABACAC.png");
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
      vertexShader: `
        uniform float uCurveRadius;
        uniform float uProgress;
        uniform vec2 uMouse;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vUv = uv;
          vec3 pos = position;
          float theta = pos.x / uCurveRadius;
          pos.x = uCurveRadius * sin(theta);
          pos.z += uCurveRadius * (1.0 - cos(theta));
          
          // Entrance logic
          float entrance = smoothstep(0.08, 0.2, uProgress);
          pos.y += (1.0 - entrance) * -30.0;
          
          // Subtler Hover: reduced multipliers from 0.25 to 0.08
          float tX = uMouse.y * 0.08;
          float tY = uMouse.x * 0.08;
          mat4 rotX = mat4(1.0, 0.0, 0.0, 0.0, 0.0, cos(tX), -sin(tX), 0.0, 0.0, sin(tX), cos(tX), 0.0, 0.0, 0.0, 0.0, 1.0);
          mat4 rotY = mat4(cos(tY), 0.0, sin(tY), 0.0, 0.0, 1.0, 0.0, 0.0, -sin(tY), 0.0, cos(tY), 0.0, 0.0, 0.0, 0.0, 1.0);
          vec4 mvPosition = viewMatrix * modelMatrix * rotY * rotX * vec4(pos, 1.0);
          vNormal = normalize(normalMatrix * (mat3(rotY * rotX) * normal));
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D uMatcap;
        uniform sampler2D uTexture;
        uniform float uProgress;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vec3 viewDir = normalize(vViewPosition);
          vec3 normal = normalize(vNormal);
          vec3 video = texture2D(uTexture, vUv).rgb;
          
          vec3 xD = normalize(vec3(viewDir.z, 0.0, -viewDir.x));
          vec3 yD = cross(viewDir, xD);
          vec2 mUv = vec2(dot(xD, normal), dot(yD, normal)) * 0.495 + 0.5;
          vec3 refl = texture2D(uMatcap, mUv).rgb;
          float fresnel = pow(1.0 - max(0.0, dot(viewDir, normal)), 3.0);
          
          // Visibility Fade based on scroll progress
          float fade = smoothstep(0.08, 0.15, uProgress) * (1.0 - smoothstep(0.33, 0.45, uProgress));
          
          gl_FragColor = vec4(video + refl * fresnel * 2.0, fade);
        }
      `,
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

    const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);
    const invlerp = (a: number, b: number, v: number) => clamp((v - a) / (b - a), 0, 1);

    const onScroll = (e: Event) => {
      const detail = (e as CustomEvent).detail as LenisScrollDetail;
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
      tvMesh.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.5;

      // Synchronized Vignette Control
      if (vignetteRef.current) {
        const vAlpha = invlerp(0.08, 0.15, currentScroll) * (1.0 - invlerp(0.33, 0.45, currentScroll));
        vignetteRef.current.style.opacity = vAlpha.toString();
        vignetteRef.current.style.visibility = vAlpha < 0.01 ? "hidden" : "visible";
      }

      if (currentScroll < 0.075 || currentScroll > 0.46) {
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
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
      video.pause();
    };
  }, []);

  return (
    <div className="interactive-video-container-sticky">
      <div ref={vignetteRef} className="video-vignette-overlay" />
      <div ref={mountRef} className="absolute inset-0 z-[70] pointer-events-none" />
    </div>
  );
};

export default InteractiveVideoPlane;
