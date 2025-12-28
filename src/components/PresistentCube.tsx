
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { CentralCube } from "./CentralCube";

interface PersistentCubeProps {
  show: boolean;
}

const PersistentCube: React.FC<PersistentCubeProps> = ({ show }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<CentralCube | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    const updateCamera = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const aspect = w / h;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();

      // Dynamic distance based on aspect ratio for responsive framing
      const distance = aspect < 1.0 ? 55 : 40;
      camera.position.set(0, 0, distance);
    };

    updateCamera();

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // 2. Initialize the Central Cube Asset
    const centralCube = new CentralCube();

    // High-end color palette for Aether aesthetic (Deep Black Core, Soft White Edges)
    centralCube.setCoreColor(new THREE.Color(0x000000));
    centralCube.setEdgeColor(new THREE.Color(0x111111));
    centralCube.setVertexColor(new THREE.Color(0x000000));

    // Start invisible for entrance stagger
    centralCube.setStructureOpacity(0.0);
    centralCube.setVertexOpacity(0.0);
    centralCube.group.scale.set(0.2, 0.2, 0.2); // Start small for punchy entrance

    scene.add(centralCube.group);
    cubeRef.current = centralCube;

    // 3. Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (cubeRef.current) {
        cubeRef.current.update();
      }
      renderer.render(scene, camera);
    };
    animate();

    // 4. Handle Responsiveness
    const onResize = () => {
      updateCamera();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
      centralCube.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Entrance Logic
  useEffect(() => {
    if (show && cubeRef.current) {
      const cube = cubeRef.current;
      const tl = gsap.timeline({ delay: 0.2 });

      // Scale up with high-end bounce
      tl.to(cube.group.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 2.2,
        ease: "elastic.out(1, 0.75)",
      });

      // Fade in structure opacity (Internal val to avoid property direct access issues)
      const opacObj = { struct: 0, vertex: 0 };
      tl.to(opacObj, {
        struct: 1.0,
        vertex: 0.6,
        duration: 2.5,
        ease: "power2.inOut",
        onUpdate() {
          cube.setStructureOpacity(opacObj.struct);
          cube.setVertexOpacity(opacObj.vertex);
        },
      }, 0);
    }
  }, [show]);

  return (
    <div
      ref={mountRef}
      className="persistent-cube-container"
      aria-hidden="true"
    />
  );
};

export default PersistentCube;
