
import * as THREE from "three";


export class CentralCube {
  public group: THREE.Group;
  private vertexMat: THREE.MeshBasicMaterial;
  private edgeMat: THREE.MeshBasicMaterial;
  private coreMat: THREE.MeshBasicMaterial;

  private targetRotation = new THREE.Vector2(0, 0);
  private currentRotation = new THREE.Vector2(0, 0);

  constructor() {
    this.group = new THREE.Group();
    const cubeSize = 8;

    const edgeRadius = 0.05;
    const vertexRadius = 0.18;

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

    // CRITICAL: MUST MATCH LOADER.TSX ROTATION
    const initialX = Math.PI / 6;
    const initialY = Math.PI / 4;
    this.currentRotation.set(initialX, initialY);
    this.targetRotation.set(initialX, initialY);
    this.group.rotation.x = initialX;
    this.group.rotation.y = initialY;

    window.addEventListener("mousemove", this.handleMouseMove);
  }

  private handleMouseMove = (e: MouseEvent): void => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    const baseX = Math.PI / 6;
    const baseY = Math.PI / 4;
    const range = 0.6;
    this.targetRotation.y = baseY + (x * range);
    this.targetRotation.x = baseX - (y * range);
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
    const ease = 0.08;
    this.currentRotation.x += (this.targetRotation.x - this.currentRotation.x) * ease;
    this.currentRotation.y += (this.targetRotation.y - this.currentRotation.y) * ease;
    this.group.rotation.x = this.currentRotation.x;
    this.group.rotation.y = this.currentRotation.y;
  }

  public dispose(): void {
    window.removeEventListener("mousemove", this.handleMouseMove);
    this.vertexMat.dispose();
    this.edgeMat.dispose();
    this.coreMat.dispose();
  }
}
