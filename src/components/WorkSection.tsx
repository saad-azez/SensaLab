import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import * as THREE from "three";
import gsap from "gsap";
import type { LenisScrollDetail } from "./types";

/* ------------------------------------------------------------------ */
/* TYPES */
/* ------------------------------------------------------------------ */

interface ProjectData {
  id: number;
  title: string;
  category: string;
  year: string;
  texture: string;
}

/* ------------------------------------------------------------------ */
/* LOCAL ASSETS */
/* ------------------------------------------------------------------ */

import matcapUrl from "../assets/images/7.jpg";
import p1 from "../assets/images/1.avif";
import p2 from "../assets/images/2.avif";
import p3 from "../assets/images/3.avif";
import p4 from "../assets/images/4.avif";
import p5 from "../assets/images/5.avif";

/* ------------------------------------------------------------------ */
/* DATA */
/* ------------------------------------------------------------------ */

const projects: ProjectData[] = [
  { id: 0, title: "NEURAL LINK", category: "Biotech", year: "2024", texture: p1 },
  { id: 1, title: "HYPER GRID", category: "Infrastructure", year: "2024", texture: p2 },
  { id: 2, title: "VOID SPACE", category: "Energy", year: "2025", texture: p3 },
  { id: 3, title: "SONIC FLUX", category: "Audio", year: "2023", texture: p4 },
  { id: 4, title: "AERO DYNAMICS", category: "Automotive", year: "2024", texture: p5 },
];

/* ------------------------------------------------------------------ */
/* COMPONENT */
/* ------------------------------------------------------------------ */

const WorkSection: React.FC = () => {
  const imagesMountRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  const [activeProject, setActiveProject] =
    useState<ProjectData | null>(null);

  const currentProjectIdRef = useRef<number | null>(null);

  /* ------------------------------------------------------------------ */
  /* TEXT ANIMATIONS */
  /* ------------------------------------------------------------------ */

  useLayoutEffect(() => {
    if (!activeProject || !textContainerRef.current) return;

    const title =
      textContainerRef.current.querySelector("h2");
    const meta =
      textContainerRef.current.querySelectorAll(
        "[data-meta]"
      );

    if (!title) return;

    const tl = gsap.timeline();

    tl.fromTo(
      title,
      { y: 60, opacity: 0, rotateX: -15 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.6,
        ease: "power4.out",
      }
    );

    if (meta.length) {
      tl.fromTo(
        meta,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.4"
      );
    }
  }, [activeProject]);

  /* ------------------------------------------------------------------ */
  /* THREE.JS */
  /* ------------------------------------------------------------------ */

  useEffect(() => {
    const mount = imagesMountRef.current;
    if (!mount) return;

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      400
    );

    const updateCamera = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      camera.position.set(0, 0, w / h < 1 ? 45 : 30);
    };
    updateCamera();

    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const loader = new THREE.TextureLoader();
    const matcap = loader.load(matcapUrl);

    const meshes: THREE.Mesh[] = [];
    const RADIUS = 18;

    projects.forEach((project) => {
      const texture = loader.load(project.texture);

      const material = new THREE.ShaderMaterial({
        uniforms: {
          uTexture: { value: texture },
          uMatcap: { value: matcap },
          uDistanceFromCenter: { value: 0 },
          uOpacity: { value: 0 },
        },
        transparent: true,
        vertexShader: `
          varying vec2 vUv;
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            vUv = uv;
            vNormal = normalize(normalMatrix * normal);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          uniform sampler2D uTexture;
          uniform sampler2D uMatcap;
          uniform float uDistanceFromCenter;
          uniform float uOpacity;
          varying vec2 vUv;
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            float focus = 1.0 - smoothstep(0.0, 1.5, abs(uDistanceFromCenter));
            vec4 tex = texture2D(uTexture, vUv);
            vec2 mUv = vNormal.xy * 0.495 + 0.5;
            vec3 refl = texture2D(uMatcap, mUv).rgb;
            vec3 finalColor = mix(vec3(0.1), tex.rgb, focus) + refl * 0.4;
            gl_FragColor = vec4(finalColor, mix(0.4, 0.95, focus) * uOpacity);
          }
        `,
      });

      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(10, 6.25, 0.05),
        material
      );

      mesh.visible = false;
      group.add(mesh);
      meshes.push(mesh);
    });

    const state = { scroll: 0, target: 0 };

    const onScroll = (e: Event) => {
      const d = (e as CustomEvent<LenisScrollDetail>).detail;
      state.target = d.progress;
    };

    window.addEventListener("lenis-scroll", onScroll);

    const onResize = () => {
      updateCamera();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    const animate = () => {
      requestAnimationFrame(animate);

      state.scroll += (state.target - state.scroll) * 0.08;

      const fade =
        smoothstep(0.3, 0.45, state.scroll) *
        (1 - smoothstep(0.85, 0.95, state.scroll));

      const center =
        state.scroll > 0.52
          ? ((state.scroll - 0.52) / 0.33) *
          (projects.length + 0.3)
          : 0;

      meshes.forEach((mesh, i) => {
        const mat = mesh.material as THREE.ShaderMaterial;
        const offset = i - center;
        const theta = offset * (Math.PI / 5);

        mesh.position.set(
          Math.sin(theta) * RADIUS + 40 * (1 - fade),
          offset * -4,
          Math.cos(theta) * RADIUS
        );

        mesh.rotation.y = theta;
        mat.uniforms.uDistanceFromCenter.value = offset;
        mat.uniforms.uOpacity.value = fade;
        mesh.visible = fade > 0.001 && Math.abs(offset) < 6;
      });

      if (fade > 0.01) renderer.render(scene, camera);

      const idx = Math.round(center);
      if (idx >= 0 && idx < projects.length) {
        if (currentProjectIdRef.current !== projects[idx].id) {
          currentProjectIdRef.current = projects[idx].id;
          setActiveProject(projects[idx]);
        }
      } else {
        currentProjectIdRef.current = null;
        setActiveProject(null);
      }
    };

    animate();

    function smoothstep(min: number, max: number, v: number) {
      const x = Math.max(0, Math.min(1, (v - min) / (max - min)));
      return x * x * (3 - 2 * x);
    }

    return () => {
      window.removeEventListener("lenis-scroll", onScroll);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  /* ------------------------------------------------------------------ */
  /* JSX */
  /* ------------------------------------------------------------------ */

  return (
    <>
      <div
        ref={imagesMountRef}
        className="work-section__images"
      />

      <div
        ref={textContainerRef}
        className="work-section__text"
      >
        {activeProject && (
          <div>
            <h2 className="work-section__title">
              {activeProject.title}
            </h2>

            <div className="work-section__meta">
              <span data-meta className="work-section__year">
                // {activeProject.year}
              </span>

              <p data-meta className="work-section__category">
                {activeProject.category} UNIT
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WorkSection;
