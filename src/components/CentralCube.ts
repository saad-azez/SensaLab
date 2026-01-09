
import * as THREE from "three";

/**
 * CONFIGURATION
 * Simplified for a direct black cube representation.
 */
const CONFIG = {
  TARGET_SIZE: 15,
  AMBIENT_ROTATION: 0.003
};

export class CentralCube {
  public group: THREE.Group;
  private cube: THREE.Mesh | null = null;
  private material: THREE.MeshStandardMaterial | null = null;

  private currentOpacity: number = 0;
  private currentEmissive: number = 0;
  private currentColor: THREE.Color = new THREE.Color(0x000000);
  private currentEdgeColor: THREE.Color = new THREE.Color(0x000000);

  private baseRotation = new THREE.Euler(0, 0, 0);
  private mouseOffset = new THREE.Vector2(0, 0);
  private currentMouseOffset = new THREE.Vector2(0, 0);

  private mouseInfluence = 0;
  private targetInfluence = 0;
  private lastMoveTime = 0;
  private INACTIVITY_THRESHOLD = 800;

  constructor() {
    this.group = new THREE.Group();
    this.group.name = "CentralCubeGroup";
    this.group.rotation.copy(this.baseRotation);

    this.initCube();
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  private initCube() {
    // Creating the simple black cube directly
    const geometry = new THREE.BoxGeometry(CONFIG.TARGET_SIZE, CONFIG.TARGET_SIZE, CONFIG.TARGET_SIZE);

    this.material = new THREE.MeshStandardMaterial({
      color: this.currentColor, // This is 0x000000 (Black)
      transparent: true,
      opacity: this.currentOpacity,
      metalness: 0.0,
      roughness: 1.0,
      emissive: this.currentEdgeColor,
      emissiveIntensity: 0
    });

    this.cube = new THREE.Mesh(geometry, this.material);
    this.group.add(this.cube);
  }

  private handleMouseMove = (e: MouseEvent): void => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    this.mouseOffset.set(-y * 0.15, x * 0.15);
    this.targetInfluence = 1.0;
    this.lastMoveTime = performance.now();
  };

  public setVertexOpacity(opacity: number): void {
    this.currentEmissive = opacity;
    if (this.material) {
      this.material.emissiveIntensity = opacity * 0.2;
    }
  }

  public setStructureOpacity(opacity: number): void {
    this.currentOpacity = opacity;
    if (this.material) {
      this.material.opacity = opacity;
    }
  }

  public setCoreColor(color: THREE.Color): void {
    this.currentColor.copy(color);
    if (this.material) {
      this.material.color.copy(this.currentColor);
    }
  }

  public setEdgeColor(color: THREE.Color): void {
    this.currentEdgeColor.copy(color);
    if (this.material) {
      this.material.emissive.copy(this.currentEdgeColor);
    }
  }

  public setVertexColor(color: THREE.Color): void {
    // Compatibility placeholder
  }

  public update(): void {
    const now = performance.now();
    if (now - this.lastMoveTime > this.INACTIVITY_THRESHOLD) {
      this.targetInfluence = 0;
    }
    const lerpSpeed = 0.05;
    this.mouseInfluence += (this.targetInfluence - this.mouseInfluence) * lerpSpeed;
    this.currentMouseOffset.lerp(this.mouseOffset, lerpSpeed);

    this.group.rotation.x = this.baseRotation.x + (this.currentMouseOffset.x * this.mouseInfluence);
    this.group.rotation.y = this.baseRotation.y + (this.currentMouseOffset.y * this.mouseInfluence);
    this.group.rotation.y += CONFIG.AMBIENT_ROTATION;
  }

  public dispose(): void {
    window.removeEventListener("mousemove", this.handleMouseMove);
    if (this.material) this.material.dispose();
    if (this.cube) this.cube.geometry.dispose();
  }
}
