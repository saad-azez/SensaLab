import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import type { LenisScrollDetail } from "./types";

/**
 * WaterDistortion
 * Subtle fullscreen water-like refraction overlay.
 * Safe for Webflow + esbuild.
 */
const WaterDistortion: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });

    renderer.setPixelRatio(1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // --- Scene & Camera ---
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // --- Simulation Targets ---
    const SIM_SIZE = 256;

    const rtOptions: THREE.RenderTargetOptions = {
      type: THREE.HalfFloatType,
      format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: false,
      stencilBuffer: false,
    };

    let rtA = new THREE.WebGLRenderTarget(SIM_SIZE, SIM_SIZE, rtOptions);
    let rtB = new THREE.WebGLRenderTarget(SIM_SIZE, SIM_SIZE, rtOptions);

    // --- Simulation Material ---
    const simMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uCurrent: { value: rtA.texture },
        uPrev: { value: rtB.texture },
        uMouse: { value: new THREE.Vector2(-1, -1) },
        uResolution: { value: new THREE.Vector2(SIM_SIZE, SIM_SIZE) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uCurrent;
        uniform sampler2D uPrev;
        uniform vec2 uMouse;
        uniform vec2 uResolution;
        varying vec2 vUv;

        void main() {
          float px = 1.0 / uResolution.x;

          float l = texture2D(uCurrent, vUv - vec2(px, 0.0)).r;
          float r = texture2D(uCurrent, vUv + vec2(px, 0.0)).r;
          float t = texture2D(uCurrent, vUv + vec2(0.0, px)).r;
          float b = texture2D(uCurrent, vUv - vec2(0.0, px)).r;
          float p = texture2D(uPrev, vUv).r;

          float height = ((l + r + t + b) * 0.5 - p) * 0.97;

          float d = distance(vUv, uMouse);
          if (d < 0.04) {
            height += (0.04 - d) * 0.5;
          }

          gl_FragColor = vec4(height, 0.0, 0.0, 1.0);
        }
      `,
    });

    const simQuad = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      simMaterial
    );

    // --- Final Material (no textures, pure refraction) ---
    const finalMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uSim: { value: rtA.texture },
      },
      transparent: true,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uSim;
        varying vec2 vUv;

        void main() {
          float h = texture2D(uSim, vUv).r;
          float alpha = smoothstep(0.02, 0.15, abs(h));
          gl_FragColor = vec4(vec3(1.0), alpha * 0.08);
        }
      `,
    });

    const finalQuad = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      finalMaterial
    );

    const mouse = new THREE.Vector2(-1, -1);
    const targetMouse = new THREE.Vector2(-1, -1);

    const onMouseMove = (e: MouseEvent) => {
      targetMouse.set(
        e.clientX / window.innerWidth,
        1 - e.clientY / window.innerHeight
      );
    };

    window.addEventListener("mousemove", onMouseMove);

    let scrollProgress = 0;

    const onScroll = (e: Event) => {
      const detail = (e as CustomEvent<LenisScrollDetail>).detail;
      scrollProgress = detail?.progress ?? 0;
    };

    window.addEventListener("lenis-scroll", onScroll);

    let rafId = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);

      if (scrollProgress > 0.85) return;

      mouse.lerp(targetMouse, 0.12);

      simMaterial.uniforms.uCurrent.value = rtA.texture;
      simMaterial.uniforms.uPrev.value = rtB.texture;
      simMaterial.uniforms.uMouse.value.copy(mouse);

      renderer.setRenderTarget(rtB);
      scene.add(simQuad);
      renderer.render(scene, camera);
      scene.remove(simQuad);

      [rtA, rtB] = [rtB, rtA];

      finalMaterial.uniforms.uSim.value = rtA.texture;

      renderer.setRenderTarget(null);
      scene.add(finalQuad);
      renderer.render(scene, camera);
      scene.remove(finalQuad);

      targetMouse.lerp(new THREE.Vector2(-1, -1), 0.02);
    };

    animate();

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("lenis-scroll", onScroll);

      renderer.dispose();
      rtA.dispose();
      rtB.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 80,
      }}
    />
  );
};

export default WaterDistortion;
