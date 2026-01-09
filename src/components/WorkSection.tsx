
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";

interface ProjectData {
  id: number;
  title: string;
  description: string;
  year: string;
  url: string;
}

const projects: ProjectData[] = [
  {
    id: 0,
    title: "NEURAL LINK",
    description: "Architecting seamless biological interfaces that bridge the gap between human cognition and synthetic intelligence processing units.",
    year: "2024",
    url: "https://cdn.prod.website-files.com/694820490d81aecdfa730cb1%2F6961799df53b06cd43d6fc46_Loop%201_mp4.mp4"
  },
  {
    id: 1,
    title: "HYPER GRID",
    description: "Next-generation energy infrastructure designed for hyper-dense urban environments, utilizing decentralized quantum distribution networks.",
    year: "2024",
    url: "https://cdn.prod.website-files.com/694820490d81aecdfa730cb1%2F69617a1eadf607bdf9c541ca_Loop%202_mp4.mp4"
  },
  {
    id: 2,
    title: "VOID SPACE",
    description: "Exploring the aesthetic potential of negative volume in interstellar architecture through procedural geometry and light manipulation.",
    year: "2025",
    url: "https://cdn.prod.website-files.com/694820490d81aecdfa730cb1%2F69617a55fa62470058c8d251_Loop%203_mp4.mp4"
  },
  {
    id: 3,
    title: "SONIC FLUX",
    description: "An immersive audio-visual ecosystem that translates real-time planetary data into evolving soundscapes and topographic visualizations.",
    year: "2023",
    url: "https://cdn.prod.website-files.com/694820490d81aecdfa730cb1%2F69617a8e97d02fae43497f22_Loop%204_mp4.mp4"
  },
  {
    id: 4,
    title: "AERO DYNAMICS",
    description: "Computational fluid dynamics research focused on high-altitude low-gravity transport systems for near-orbit logistics.",
    year: "2024",
    url: "https://cdn.prod.website-files.com/694820490d81aecdfa730cb1%2F69617ac8554519b7cc800e54_Loop%205_mp4.mp4"
  },
];

interface WorkSectionProps {
  progress?: number;
}

const WorkSection: React.FC<WorkSectionProps> = ({ progress = 0 }) => {
  const imagesMountRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);
  const currentProjectIdRef = useRef<number | null>(null);

  const settingsRef = useRef({
    radius: 28,
    verticalStep: 18,
    planeWidth: 24,
    planeHeight: 15,
    curveRadius: 45,
    baseZ: 60
  });

  useEffect(() => {
    if (activeProject && textContainerRef.current) {
      const title = textContainerRef.current.querySelector(".work-project-title");
      const metaItems = textContainerRef.current.querySelectorAll(".work-meta-item");

      const tl = gsap.timeline();
      tl.fromTo(title,
        { y: 30, opacity: 0, rotateX: -5 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.5, ease: "power3.out" }
      )
        .fromTo(metaItems,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, stagger: 0.08, ease: "power2.out" },
          "-=0.3"
        );
    }
  }, [activeProject]);

  useEffect(() => {
    const imagesMount = imagesMountRef.current;
    if (!imagesMount) return;

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    const imagesScene = new THREE.Scene();
    const imagesRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    imagesRenderer.setSize(window.innerWidth, window.innerHeight);
    imagesRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    imagesMount.appendChild(imagesRenderer.domElement);

    const carouselGroup = new THREE.Group();
    imagesScene.add(carouselGroup);

    const textureLoader = new THREE.TextureLoader();
    const matcapTexture = textureLoader.load("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/matcaps/matcap-porcelain-white.jpg");
    matcapTexture.colorSpace = THREE.SRGBColorSpace;

    const meshes: THREE.Mesh[] = [];
    let carouselGeometry = new THREE.BoxGeometry(24, 15, 0.15, 64, 32, 2);

    projects.forEach((project) => {
      const texture = textureLoader.load(project.url);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;

      const material = new THREE.ShaderMaterial({
        uniforms: {
          uTexture: { value: texture },
          uMatcap: { value: matcapTexture },
          uDistanceFromCenter: { value: 0.0 },
          uOpacity: { value: 0.0 },
          uTime: { value: 0 },
          uCurveRadius: { value: 45.0 }
        },
        transparent: true,
        vertexShader: `
          uniform float uCurveRadius;
          varying vec2 vUv;
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            vUv = uv;
            vec3 pos = position;
            float theta = pos.x / uCurveRadius;
            pos.x = uCurveRadius * sin(theta);
            pos.z += uCurveRadius * (1.0 - cos(theta));
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            vNormal = normalize(normalMatrix * normal);
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
            vec3 viewDir = normalize(vViewPosition);
            vec3 normal = normalize(vNormal);
            vec2 pUv = vUv;
            pUv = (pUv - 0.5) * 0.95 + 0.5;
            float dist = abs(uDistanceFromCenter);
            float focus = 1.0 - smoothstep(0.0, 1.8, dist);
            
            // Subtler RGB Chromatic Aberration
            // Reduced multipliers for a cleaner look
            float aberr = 0.005 + 0.008 * (1.0 - focus);
            vec2 refractOff = normal.xy * 0.03 * focus;
            
            vec3 tex;
            tex.r = texture2D(uTexture, pUv + refractOff + vec2(aberr, 0.0)).r;
            tex.g = texture2D(uTexture, pUv + refractOff).g;
            tex.b = texture2D(uTexture, pUv + refractOff - vec2(aberr, 0.0)).b;
            
            float gray = dot(tex, vec3(0.299, 0.587, 0.114));
            vec3 finalTex = mix(vec3(gray * 0.3), tex * 1.05, focus);
            
            vec3 xDir = normalize(vec3(viewDir.z, 0.0, -viewDir.x));
            vec3 yDir = cross(viewDir, xDir);
            vec2 mUv = vec2(dot(xDir, normal), dot(yDir, normal)) * 0.495 + 0.5;
            vec3 reflection = texture2D(uMatcap, mUv).rgb;
            
            float fresnel = pow(1.0 - max(0.0, dot(viewDir, normal)), 4.0);
            vec3 color = finalTex + reflection * fresnel * 2.5 + reflection * 0.05;
            
            gl_FragColor = vec4(color, uOpacity * (0.2 + focus * 0.8 + fresnel * 0.5));
          }
        `,
      });

      const mesh = new THREE.Mesh(carouselGeometry, material);
      carouselGroup.add(mesh);
      meshes.push(mesh);
    });

    const state = { scroll: 0, targetScroll: 0 };
    const handleLenisScroll = (e: any) => { state.targetScroll = e.detail.progress; };
    window.addEventListener("lenis-scroll", handleLenisScroll);

    const animate = (time: number) => {
      requestAnimationFrame(animate);
      state.scroll += (state.targetScroll - state.scroll) * 0.08;

      const entranceStart = 0.33;
      const entranceEnd = 0.45;
      let entranceProgress = 0;
      if (state.scroll > entranceStart) {
        entranceProgress = Math.min(1, (state.scroll - entranceStart) / (entranceEnd - entranceStart));
      }

      const exitStart = 0.78;
      const exitEnd = 0.82;
      let exitOpacity = 1.0;
      if (state.scroll > exitStart) {
        exitOpacity = Math.max(0, 1.0 - (state.scroll - exitStart) / (exitEnd - exitStart));
      }

      const finalSectionOpacity = entranceProgress * exitOpacity;

      let textAlpha = 0;
      if (state.scroll > 0.45) {
        textAlpha = Math.min(1, (state.scroll - 0.45) / 0.08);
      }
      const finalTextOpacity = textAlpha * exitOpacity;

      let carouselProgress = 0;
      const scrollRangeStart = 0.50;
      const scrollRangeEnd = 0.78;
      if (state.scroll > scrollRangeStart) {
        const rel = Math.max(0, Math.min(1, (state.scroll - scrollRangeStart) / (scrollRangeEnd - scrollRangeStart)));
        carouselProgress = rel * (projects.length - 1);
      }

      camera.position.set(0, 0, settingsRef.current.baseZ);
      camera.lookAt(0, 0, 0);

      const entranceOffset = 50 * (1.0 - Math.pow(entranceProgress, 2.0));
      const angleStep = Math.PI / 4.5;

      meshes.forEach((mesh, i) => {
        const mat = mesh.material as THREE.ShaderMaterial;
        const offsetIndex = i - carouselProgress;
        const theta = offsetIndex * angleStep;

        mesh.position.set(
          Math.sin(theta) * settingsRef.current.radius + entranceOffset,
          offsetIndex * -settingsRef.current.verticalStep,
          Math.cos(theta) * settingsRef.current.radius
        );
        mesh.rotation.y = theta;

        mat.uniforms.uDistanceFromCenter.value = offsetIndex;
        mat.uniforms.uOpacity.value = finalSectionOpacity;
        mat.uniforms.uTime.value = time * 0.001;
        mat.uniforms.uCurveRadius.value = settingsRef.current.curveRadius;
        mesh.visible = finalSectionOpacity > 0.001 && Math.abs(offsetIndex) < 4.5;
      });

      if (state.scroll > 0.48 && exitOpacity > 0.01) {
        const activeIndex = Math.round(carouselProgress);
        const clampedIndex = Math.max(0, Math.min(projects.length - 1, activeIndex));
        if (currentProjectIdRef.current !== projects[clampedIndex].id) {
          currentProjectIdRef.current = projects[clampedIndex].id;
          setActiveProject(projects[clampedIndex]);
        }
      }

      if (textContainerRef.current) {
        textContainerRef.current.style.opacity = finalTextOpacity.toString();
        textContainerRef.current.style.pointerEvents = finalTextOpacity > 0.1 ? "auto" : "none";
        textContainerRef.current.style.visibility = finalTextOpacity < 0.01 ? "hidden" : "visible";
      }

      imagesRenderer.render(imagesScene, camera);
    };
    requestAnimationFrame(animate);

    const handleResize = () => {
      const w = window.innerWidth, h = window.innerHeight;
      const aspect = w / h;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();

      const isMobile = aspect < 0.8;
      const isTablet = aspect >= 0.8 && aspect < 1.2;

      settingsRef.current.baseZ = isMobile ? 100 : (isTablet ? 80 : 60);

      if (isMobile) {
        settingsRef.current.planeWidth = 18;
        settingsRef.current.planeHeight = 28;
        settingsRef.current.radius = 22;
        settingsRef.current.verticalStep = 32;
        settingsRef.current.curveRadius = 25;
      } else if (isTablet) {
        settingsRef.current.planeWidth = 22;
        settingsRef.current.planeHeight = 16;
        settingsRef.current.radius = 25;
        settingsRef.current.verticalStep = 20;
        settingsRef.current.curveRadius = 40;
      } else {
        settingsRef.current.planeWidth = 24;
        settingsRef.current.planeHeight = 15;
        settingsRef.current.radius = 28;
        settingsRef.current.verticalStep = 18;
        settingsRef.current.curveRadius = 45;
      }

      carouselGeometry.dispose();
      carouselGeometry = new THREE.BoxGeometry(
        settingsRef.current.planeWidth,
        settingsRef.current.planeHeight,
        0.15, 64, 32, 2
      );

      meshes.forEach(mesh => {
        mesh.geometry = carouselGeometry;
      });

      imagesRenderer.setSize(w, h);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("lenis-scroll", handleLenisScroll);
      window.removeEventListener("resize", handleResize);
      carouselGeometry.dispose();
      imagesRenderer.dispose();
    };
  }, []);

  return (
    <>
      <div ref={imagesMountRef} className="work-section-mount work-images-layer" />
      <div ref={textContainerRef} className="work-text-container" style={{ opacity: 0 }}>
        {activeProject && (
          <div key={activeProject.id} className="work-text-inner">
            <h2 className="work-project-title">
              {activeProject.title}
            </h2>
            <div className="work-meta-wrapper">
              <span className="work-meta-item work-meta-tag">
                {"// "}{activeProject.year}
              </span>
              <p className="work-meta-item work-project-description">
                {activeProject.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WorkSection;
