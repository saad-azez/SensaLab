export interface LenisScrollDetail {
  scroll: number;
  limit: number;
  progress: number;
  velocity: number;
}

declare global {
  interface WindowEventMap {
    "lenis-scroll": CustomEvent<LenisScrollDetail>;
  }
}

export { };
