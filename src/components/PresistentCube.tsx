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

    const scene = new THREE.Scene();

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
      camera.position.set(0, 0, w / h < 1.0 ? 45 : 30);
    };
    updateCamera();

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const centralCube = new CentralCube();

    // High-end color palette
    centralCube.setCoreColor(new THREE.Color(0x02020a));
    centralCube.setEdgeColor(new THREE.Color(0x6366f1));
    centralCube.setVertexColor(new THREE.Color(0x22d3ee));

    centralCube.setStructureOpacity(0);
    centralCube.setVertexOpacity(0);
    centralCube.group.scale.set(1, 1, 1);

    scene.add(centralCube.group);
    cubeRef.current = centralCube;

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      centralCube.update();
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
    if (!show || !cubeRef.current) return;

    const cube = cubeRef.current;
    const tl = gsap.timeline();

    tl.to(
      { val: 0 },
      {
        val: 1,
        duration: 2.5,
        ease: "power2.inOut",
        onUpdate() {
          cube.setStructureOpacity(
            (this.targets()[0] as any).val
          );
        },
      }
    );

    tl.to(
      { val: 0 },
      {
        val: 1,
        duration: 1.5,
        ease: "power4.out",
        onUpdate() {
          cube.setVertexOpacity(
            (this.targets()[0] as any).val
          );
        },
      },
      "-=1.8"
    );

    gsap.to(cube.group.scale, {
      x: 1.04,
      y: 1.04,
      z: 1.04,
      duration: 0.08,
      repeat: 5,
      yoyo: true,
      ease: "none",
      delay: 0.1,
    });

    gsap.to(cube.group.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 1.2,
      ease: "elastic.out(1, 0.3)",
      delay: 0.5,
    });
  }, [show]);

  return <div ref={mountRef} className="persistent-cube" />;
};

export default PersistentCube;
