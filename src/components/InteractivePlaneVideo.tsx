
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

interface InteractiveVideoPlaneProps {
  progress?: number;
}

const InteractiveVideoPlane: React.FC<InteractiveVideoPlaneProps> = ({ progress = 0 }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const meshRef = useRef<THREE.Mesh | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

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
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
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
        uTexture: { value: videoTexture },
        uTime: { value: 0 },
        uOpacity: { value: 0 },
      },
      transparent: true,
      depthWrite: false,
      vertexShader: `
        uniform float uCurveRadius;
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
          
          float tX = (uMouse.y * 0.15);
          float tY = (uMouse.x * 0.15);
          
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
        uniform float uOpacity;
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
          
          gl_FragColor = vec4(video + refl * fresnel * 2.0, uOpacity);
        }
      `,
    });

    const tvMesh = new THREE.Mesh(geometry, material);
    scene.add(tvMesh);
    meshRef.current = tvMesh;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    const clock = new THREE.Clock();
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      material.uniforms.uTime.value = clock.getElapsedTime();
      material.uniforms.uMouse.value.lerp(mouse.current, 0.08);
      tvMesh.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.4;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!cameraRef.current) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const aspect = w / h;

      cameraRef.current.aspect = aspect;

      // Dynamic scaling for 3D Plane
      if (meshRef.current) {
        if (aspect < 1) {
          // Mobile: Shrink plane and pull camera back
          const scale = Math.min(1, w / 450);
          meshRef.current.scale.set(scale, scale, scale);
          cameraRef.current.position.z = 100;
        } else {
          // Desktop: Reset
          meshRef.current.scale.set(1, 1, 1);
          cameraRef.current.position.z = 80;
        }
      }

      cameraRef.current.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", startOnInteraction);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
      video.pause();
    };
  }, []);

  // Update visual state based on scroll progress
  useEffect(() => {
    if (!meshRef.current) return;
    const mesh = meshRef.current;
    const mat = mesh.material as THREE.ShaderMaterial;

    const entranceProgress = gsap.utils.clamp(0, 1, (progress - 0.05) / 0.25);

    // Smooth transition for base scale
    const baseScale = window.innerWidth < 768 ? Math.min(1, window.innerWidth / 450) : 1;
    const bloomScale = gsap.utils.interpolate(0.1, baseScale, entranceProgress);
    mesh.scale.set(bloomScale, bloomScale, bloomScale);

    mat.uniforms.uOpacity.value = entranceProgress;
    mesh.visible = entranceProgress > 0.01;

    if (mountRef.current) {
      mountRef.current.style.pointerEvents = entranceProgress > 0.8 ? "auto" : "none";
      mountRef.current.style.opacity = entranceProgress.toString();
    }
  }, [progress]);

  return <div ref={mountRef} className="interactive-video-container-sticky" />;
};

export default InteractiveVideoPlane;
