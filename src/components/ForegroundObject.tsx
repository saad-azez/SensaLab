import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface ProjectData {
  id: number;
  title: string;
  category: string;
  year: string;
  url: string;
}

const projects: ProjectData[] = [
  { id: 0, title: "NEURAL LINK", category: "Biotech", year: "2024", url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop" },
  { id: 1, title: "HYPER GRID", category: "Infrastructure", year: "2024", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, title: "VOID SPACE", category: "Energy", year: "2025", url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2022&auto=format&fit=crop" },
  { id: 3, title: "SONIC FLUX", category: "Audio", year: "2023", url: "https://images.unsplash.com/photo-1482686119689-063ed815ebc7?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, title: "AERO DYNAMICS", category: "Automotive", year: "2024", url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" },
  { id: 5, title: "CYBER CITY", category: "Urban", year: "2088", url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop" },
  { id: 6, title: "DEEP DIVE", category: "Marine", year: "2024", url: "https://images.unsplash.com/photo-1582967788606-a171f1080ca8?q=80&w=2070&auto=format&fit=crop" },
];

const ForegroundObject: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  // State for HTML Overlay
  const [activeProject, setActiveProject] = useState<ProjectData | null>(projects[0]);

  // We use refs for animation state to avoid re-renders impacting the loop
  const state = useRef({
    scrollProgress: 0, // 0 to 1
    targetProgress: 0,
    currentProjectIndex: 0,
  });

  useEffect(() => {
    if (!mountRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();

    // Camera
    // Positioned to frame the center image (at z=0) perfectly.
    const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 25);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // --- 1. The Artifact (The Cube) ---
    // Positioned deep in the background so it is blocked by the active image (z=0)
    // but revealed when images transition.
    const artifactGroup = new THREE.Group();
    artifactGroup.position.z = -25;
    scene.add(artifactGroup);

    const boxGeo = new THREE.BoxGeometry(10, 10, 10);
    const boxMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const artifactMesh = new THREE.Mesh(boxGeo, boxMat);
    artifactGroup.add(artifactMesh);

    const coreGeo = new THREE.BoxGeometry(2, 2, 2);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    artifactGroup.add(coreMesh);

    // --- 2. The Carousel ---
    const carouselGroup = new THREE.Group();
    scene.add(carouselGroup);

    const textureLoader = new THREE.TextureLoader();
    const meshes: THREE.Mesh[] = [];

    // Dimensions
    const IMG_WIDTH = 14;
    const IMG_HEIGHT = 9;
    const GEOMETRY = new THREE.PlaneGeometry(IMG_WIDTH, IMG_HEIGHT, 32, 32);

    projects.forEach((project, i) => {
      const texture = textureLoader.load(project.url);
      texture.colorSpace = THREE.SRGBColorSpace;

      const material = new THREE.ShaderMaterial({
        uniforms: {
          uTexture: { value: texture },
          uDistanceFromCenter: { value: 1.0 }, // 0 = Active, >0 = Background
          uOpacity: { value: 1.0 },
        },
        transparent: true,
        vertexShader: `
                varying vec2 vUv;
                uniform float uDistanceFromCenter;
                void main() {
                    vUv = uv;
                    vec3 pos = position;
                    
                    // Subtle bend based on horizontal position (optional)
                    // pos.z -= pow(abs(pos.x), 2.0) * 0.01;

                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
        fragmentShader: `
                uniform sampler2D uTexture;
                uniform float uDistanceFromCenter;
                uniform float uOpacity;
                varying vec2 vUv;

                void main() {
                    vec4 tex = texture2D(uTexture, vUv);
                    
                    // Grayscale conversion
                    float gray = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
                    vec3 grayColor = vec3(gray);
                    
                    // Focus Logic
                    // dist 0 -> Full Color. dist > 1 -> Grayscale.
                    float saturation = 1.0 - smoothstep(0.0, 1.0, abs(uDistanceFromCenter));
                    
                    vec3 finalColor = mix(grayColor, tex.rgb, saturation);
                    
                    // Brightness boost for active
                    finalColor += vec3(0.1) * saturation;

                    // Opacity Logic
                    // dist 0 -> 1.0. dist > 2 -> 0.3.
                    float alpha = mix(1.0, 0.4, smoothstep(0.0, 2.0, abs(uDistanceFromCenter)));
                    
                    gl_FragColor = vec4(finalColor, alpha * uOpacity);
                }
            `,
      });

      const mesh = new THREE.Mesh(GEOMETRY, material);
      mesh.userData = { id: i };
      carouselGroup.add(mesh);
      meshes.push(mesh);
    });

    // --- 3. Animation & Layout Logic ---
    const handleLenisScroll = (e: any) => {
      const { progress } = e.detail;
      // progress is 0..1
      state.current.targetProgress = progress;
    };
    window.addEventListener("lenis-scroll", handleLenisScroll);

    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth Scroll
      state.current.scrollProgress += (state.current.targetProgress - state.current.scrollProgress) * 0.08;

      // Map 0..1 scroll to 0..(TotalProjects-1)
      // We add a bit of padding so we can scroll past the last one slightly or start before.
      // Actually, let's map exactly: 0 = Project 0, 1 = Project End.
      const totalScrollUnits = projects.length - 1;
      const currentScrollIndex = state.current.scrollProgress * totalScrollUnits;

      state.current.currentProjectIndex = currentScrollIndex;

      // Update Overlay State
      const activeIndex = Math.round(currentScrollIndex);
      if (projects[activeIndex] && (!activeProject || activeProject.id !== projects[activeIndex].id)) {
        setActiveProject(projects[activeIndex]);
      }

      // Update Meshes
      meshes.forEach((mesh, i) => {
        // Calculate relative position to the "camera focus"
        // relativeIndex 0 means this mesh should be at center.
        // relativeIndex +1 means it is the NEXT image (should be to the right).
        const relativeIndex = i - currentScrollIndex;

        // --- Layout Formula ---
        // If relativeIndex is 0: x=0, z=0.
        // If relativeIndex is 1: x=18, z=-20. (To the right and back)
        // If relativeIndex is 2: x=36, z=-40.

        // X Position: Spread them out horizontally
        const xSpacing = 18.0;
        mesh.position.x = relativeIndex * xSpacing;

        // Z Position:
        // We want a parabolic curve or linear recession.
        // Let's do linear recession for the look requested ("see 2nd image coming").
        // We push them back based on distance from center.
        // But specifically, user said "Right side i see 2nd image".
        // So if relativeIndex > 0, x > 0.

        const zSpacing = 15.0;
        // We use abs() so previous images also recede into background (left side)
        // or just linear if we want a "train" effect.
        // "first image starts to move back" -> implies it recedes as it goes left (negative index).
        mesh.position.z = -Math.abs(relativeIndex) * zSpacing;

        // Rotation
        // Slight rotation to face inward?
        mesh.rotation.y = -relativeIndex * 0.3; // Rotate towards center

        // Uniforms
        const mat = mesh.material as THREE.ShaderMaterial;
        mat.uniforms.uDistanceFromCenter.value = relativeIndex;

        // Hide if too far to save render/clutter
        mesh.visible = Math.abs(relativeIndex) < 4;
      });

      // Rotate Artifact
      artifactGroup.rotation.x += 0.005;
      artifactGroup.rotation.y += 0.01;

      // Subtle parallax on artifact based on scroll velocity could be cool,
      // but let's keep it steady as the "anchor".

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("lenis-scroll", handleLenisScroll);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div
        ref={mountRef}
        className="absolute inset-0 z-[60] pointer-events-none"
        aria-hidden="true"
      />

      {/* Dynamic Project Overlay */}
      <div className="absolute bottom-12 left-8 md:left-16 z-[80] pointer-events-none mix-blend-difference text-white transition-opacity duration-500">
        {activeProject && (
          <div key={activeProject.id} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-[10vw] font-black uppercase tracking-tighter leading-[0.85] mb-4">
              {activeProject.title}
            </h2>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <span className="text-xl font-mono border border-white/40 px-3 py-1 rounded-full self-start">
                {activeProject.year}
              </span>
              <p className="max-w-xl text-lg md:text-xl font-light opacity-90 leading-relaxed">
                {activeProject.category} — Exploring the boundaries of digital reality through procedural generation and neural rendering.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ForegroundObject;
