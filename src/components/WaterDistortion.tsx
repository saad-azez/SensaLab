import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import type { LenisScrollDetail } from "./types";

const WaterDistortion: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(1);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const simSize = 512;
    const rtOptions = {
      type: THREE.HalfFloatType,
      format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
    };

    let rtA = new THREE.WebGLRenderTarget(simSize, simSize, rtOptions);
    let rtB = new THREE.WebGLRenderTarget(simSize, simSize, rtOptions);
    let rtC = new THREE.WebGLRenderTarget(simSize, simSize, rtOptions);

    const simMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uCurrent: { value: null },
        uPrev: { value: null },
        uMouse: { value: new THREE.Vector2(-1, -1) },
        uRadius: { value: 0.04 },
        uStrength: { value: 0.035 },
        uDamping: { value: 0.96 },
        uResolution: {
          value: new THREE.Vector2(simSize, simSize),
        },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uCurrent;
        uniform sampler2D uPrev;
        uniform vec2 uMouse;
        uniform float uRadius;
        uniform float uStrength;
        uniform float uDamping;
        uniform vec2 uResolution;
        varying vec2 vUv;

        void main() {
          float p = 1.0 / uResolution.x;
          float h0 = texture2D(uCurrent, vUv + vec2(p, 0.0)).r;
          float h1 = texture2D(uCurrent, vUv - vec2(p, 0.0)).r;
          float h2 = texture2D(uCurrent, vUv + vec2(0.0, p)).r;
          float h3 = texture2D(uCurrent, vUv - vec2(0.0, p)).r;
          float ph = texture2D(uPrev, vUv).r;

          float nh = ((h0 + h1 + h2 + h3) * 0.5 - ph) * uDamping;
          float d = distance(vUv, uMouse);

          if (d < uRadius) {
            nh += (1.0 - smoothstep(0.0, uRadius, d)) * uStrength;
          }

          gl_FragColor = vec4(nh, 0.0, 0.0, 1.0);
        }
      `,
    });

    const simQuad = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      simMaterial
    );

    const matcapLoader = new THREE.TextureLoader();
    const matcap = matcapLoader.load(
      "https://raw.githubusercontent.com/nidorx/matcaps/master/512/3B3C3F_DAD9D5_929290_ABACAC.png"
    );
    matcap.colorSpace = THREE.SRGBColorSpace;

    const finalMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uSim: { value: null },
        uMatcap: { value: matcap },
      },
      transparent: true,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uSim;
        uniform sampler2D uMatcap;
        varying vec2 vUv;

        void main() {
          float p = 1.0 / 512.0;
          float hL = texture2D(uSim, vUv - vec2(p, 0.0)).r;
          float hR = texture2D(uSim, vUv + vec2(p, 0.0)).r;
          float hU = texture2D(uSim, vUv - vec2(0.0, p)).r;
          float hD = texture2D(uSim, vUv + vec2(0.0, p)).r;

          vec3 n = normalize(vec3(hL - hR, hU - hD, 0.4));
          vec2 mUv = n.xy * 0.5 + 0.5;
          vec3 refl = texture2D(uMatcap, mUv).rgb;

          float h = texture2D(uSim, vUv).r;
          float mask = smoothstep(0.001, 0.15, abs(h));

          gl_FragColor = vec4(refl * 0.8 + vec3(h) * 0.1, mask * 0.2);
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
        1.0 - e.clientY / window.innerHeight
      );
    };

    window.addEventListener("mousemove", onMouseMove);

    let currentScroll = 0;
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (currentScroll > 0.8) return;

      mouse.lerp(targetMouse, 0.15);

      simMaterial.uniforms.uCurrent.value = rtA.texture;
      simMaterial.uniforms.uPrev.value = rtB.texture;
      simMaterial.uniforms.uMouse.value.copy(mouse);

      renderer.setRenderTarget(rtC);
      scene.children[0] = simQuad;
      renderer.render(scene, camera);

      [rtA, rtB, rtC] = [rtC, rtA, rtB];

      renderer.setRenderTarget(null);
      finalMaterial.uniforms.uSim.value = rtA.texture;
      scene.children[0] = finalQuad;
      renderer.render(scene, camera);

      targetMouse.lerp(new THREE.Vector2(-1, -1), 0.01);
    };

    animate();

    const onResize = () =>
      renderer.setSize(window.innerWidth, window.innerHeight);

    window.addEventListener("resize", onResize);

    const onScroll = (e: Event) => {
      const detail = (e as CustomEvent).detail as LenisScrollDetail;
      currentScroll = detail.progress;

      if (mount) {
        mount.style.opacity = (
          1.0 - Math.pow(currentScroll, 2.5) * 0.8
        ).toString();
      }
    };

    window.addEventListener("lenis-scroll", onScroll);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("lenis-scroll", onScroll);
      cancelAnimationFrame(animId);
      renderer.dispose();
      rtA.dispose();
      rtB.dispose();
      rtC.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="water-distortion" />;
};

export default WaterDistortion;
