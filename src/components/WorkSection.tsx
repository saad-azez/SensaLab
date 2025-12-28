import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";

interface ProjectData {
  id: number;
  title: string;
  category: string;
  year: string;
  url: string;
}

const projects: ProjectData[] = [
  {
    id: 0,
    title: "NEURAL LINK",
    category: "Biotech",
    year: "2024",
    url: "https://cdn.prod.website-files.com/694820490d81aecdfa730cb1/695111499e89b2d51413bad9_1.avif",
  },
  {
    id: 1,
    title: "HYPER GRID",
    category: "Infrastructure",
    year: "2024",
    url: "https://cdn.prod.website-files.com/694820490d81aecdfa730cb1/69511148e69fb4a2696b2ffe_2.avif",
  },
  {
    id: 2,
    title: "VOID SPACE",
    category: "Energy",
    year: "2025",
    url: "https://cdn.prod.website-files.com/694820490d81aecdfa730cb1/69511148251f9ab52de780bf_3.avif",
  },
];

const WorkSection: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 400);
    camera.position.z = 40;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    const group = new THREE.Group();
    scene.add(group);

    projects.forEach((p, i) => {
      const tex = loader.load(p.url);
      const mat = new THREE.MeshBasicMaterial({ map: tex });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(12, 7), mat);
      mesh.position.x = i * 16;
      group.add(mesh);
    });

    const animate = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        zIndex: 60,
      }}
    />
  );
};

export default WorkSection;
