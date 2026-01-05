
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
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    cameraRef.current = camera;

    const updateCamera = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const aspect = w / h;
      camera.aspect = aspect;

      // Calibrated for a cubeSize of 18
      let distance = 65;
      let cubeScale = 1;

      if (aspect < 0.8) {
        // Mobile Portrait: Push back further to prevent clipping edges
        distance = 110;
        cubeScale = 0.9;
      } else if (aspect < 1.2) {
        // Tablet / Square
        distance = 85;
        cubeScale = 1.0;
      } else {
        // Wide Desktop
        distance = 65;
        cubeScale = 1.1;
      }

      camera.position.set(0, 0, distance);
      camera.lookAt(0, 0, 0);

      if (cubeRef.current) {
        if (show) cubeRef.current.group.scale.set(cubeScale, cubeScale, cubeScale);
      }
      camera.updateProjectionMatrix();
    };

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const centralCube = new CentralCube();
    centralCube.setCoreColor(new THREE.Color(0x000000));
    centralCube.setEdgeColor(new THREE.Color(0x111111));
    centralCube.setVertexColor(new THREE.Color(0x000000));

    centralCube.setStructureOpacity(0.0);
    centralCube.setVertexOpacity(0.0);
    centralCube.group.scale.set(0.1, 0.1, 0.1);

    scene.add(centralCube.group);
    cubeRef.current = centralCube;

    updateCamera();

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (cubeRef.current) {
        cubeRef.current.update();
      }
      renderer.render(scene, camera);
    };
    animate();

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

  useEffect(() => {
    if (show && cubeRef.current) {
      const cube = cubeRef.current;
      const tl = gsap.timeline({ delay: 0.2 });

      const w = window.innerWidth;
      const h = window.innerHeight;
      const aspect = w / h;
      const targetScale = aspect < 0.8 ? 0.9 : (aspect < 1.2 ? 1.0 : 1.1);

      tl.to(cube.group.scale, {
        x: targetScale,
        y: targetScale,
        z: targetScale,
        duration: 2.5,
        ease: "elastic.out(1, 0.8)",
      });

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
