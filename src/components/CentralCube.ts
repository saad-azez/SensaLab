
import * as THREE from "three";

export class CentralCube {
  public group: THREE.Group;
  private vertexMat: THREE.MeshBasicMaterial;
  private edgeMat: THREE.MeshBasicMaterial;
  private coreMat: THREE.MeshBasicMaterial;

  // Rotation states
  private baseRotation = new THREE.Euler(Math.PI / 6, Math.PI / 4, 0);
  private mouseOffset = new THREE.Vector2(0, 0);
  private currentMouseOffset = new THREE.Vector2(0, 0);

  // Influence tracking
  private mouseInfluence = 0;
  private targetInfluence = 0;
  private lastMoveTime = 0;
  private INACTIVITY_THRESHOLD = 1000; // ms before returning to idle

  constructor() {
    this.group = new THREE.Group();
    // Increased size significantly for "center of attention" presence
    const cubeSize = 18;

    const edgeRadius = 0.08;
    const vertexRadius = 0.3;

    // 1. Solid Core
    const coreGeo = new THREE.BoxGeometry(cubeSize - 0.1, cubeSize - 0.1, cubeSize - 0.1);
    this.coreMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 1.0 });
    const coreMesh = new THREE.Mesh(coreGeo, this.coreMat);
    this.group.add(coreMesh);

    // 2. Wireframe Edges
    const half = cubeSize / 2;
    const edgeGeo = new THREE.CylinderGeometry(edgeRadius, edgeRadius, cubeSize, 8);
    this.edgeMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1.0 });

    const positions = [
      { pos: [half, 0, half], rot: [0, 0, 0] },
      { pos: [half, 0, -half], rot: [0, 0, 0] },
      { pos: [-half, 0, half], rot: [0, 0, 0] },
      { pos: [-half, 0, -half], rot: [0, 0, 0] },
      { pos: [0, half, half], rot: [0, 0, Math.PI / 2] },
      { pos: [0, half, -half], rot: [0, 0, Math.PI / 2] },
      { pos: [0, -half, half], rot: [0, 0, Math.PI / 2] },
      { pos: [0, -half, -half], rot: [0, 0, Math.PI / 2] },
      { pos: [half, half, 0], rot: [Math.PI / 2, 0, 0] },
      { pos: [half, -half, 0], rot: [Math.PI / 2, 0, 0] },
      { pos: [-half, half, 0], rot: [Math.PI / 2, 0, 0] },
      { pos: [-half, -half, 0], rot: [Math.PI / 2, 0, 0] },
    ];

    positions.forEach((p) => {
      const mesh = new THREE.Mesh(edgeGeo, this.edgeMat);
      mesh.position.set(p.pos[0], p.pos[1], p.pos[2]);
      if (p.rot[0]) mesh.rotation.x = p.rot[0];
      if (p.rot[1]) mesh.rotation.y = p.rot[1];
      if (p.rot[2]) mesh.rotation.z = p.rot[2];
      this.group.add(mesh);
    });

    // 3. Vertices
    const vertexGeo = new THREE.BoxGeometry(vertexRadius * 2, vertexRadius * 2, vertexRadius * 2);
    this.vertexMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 });

    const corners = [
      [half, half, half], [half, half, -half], [half, -half, half], [half, -half, -half],
      [-half, half, half], [-half, half, -half], [-half, -half, half], [-half, -half, -half],
    ];

    corners.forEach((pos) => {
      const pixel = new THREE.Mesh(vertexGeo, this.vertexMat);
      pixel.position.set(pos[0], pos[1], pos[2]);
      this.group.add(pixel);
    });

    // Initial orientation
    this.group.rotation.copy(this.baseRotation);

    window.addEventListener("mousemove", this.handleMouseMove);
  }

  private handleMouseMove = (e: MouseEvent): void => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;

    // Target offset based on cursor position
    const range = 0.6;
    this.mouseOffset.x = -y * range;
    this.mouseOffset.y = x * range;

    // Activate influence
    this.targetInfluence = 1.0;
    this.lastMoveTime = performance.now();
  };

  public setVertexOpacity(opacity: number): void {
    if (this.vertexMat) this.vertexMat.opacity = opacity;
  }

  public setStructureOpacity(opacity: number): void {
    if (this.coreMat) this.coreMat.opacity = opacity;
    if (this.edgeMat) this.edgeMat.opacity = opacity;
  }

  public setCoreColor(color: THREE.Color): void {
    if (this.coreMat) this.coreMat.color.copy(color);
  }

  public setEdgeColor(color: THREE.Color): void {
    if (this.edgeMat) this.edgeMat.color.copy(color);
  }

  public setVertexColor(color: THREE.Color): void {
    if (this.vertexMat) this.vertexMat.color.copy(color);
  }

  public update(): void {
    const now = performance.now();

    if (now - this.lastMoveTime > this.INACTIVITY_THRESHOLD) {
      this.targetInfluence = 0;
    }

    const lerpSpeed = 0.04;
    this.mouseInfluence += (this.targetInfluence - this.mouseInfluence) * lerpSpeed;
    this.currentMouseOffset.lerp(this.mouseOffset, lerpSpeed);

    this.group.rotation.x = this.baseRotation.x + (this.currentMouseOffset.x * this.mouseInfluence);
    this.group.rotation.y = this.baseRotation.y + (this.currentMouseOffset.y * this.mouseInfluence);

    this.group.rotation.z = 0;
    this.group.position.set(0, 0, 0);
  }

  public dispose(): void {
    window.removeEventListener("mousemove", this.handleMouseMove);
    this.vertexMat.dispose();
    this.edgeMat.dispose();
    this.coreMat.dispose();
  }
}
