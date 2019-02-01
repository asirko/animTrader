export class AnimationItem {
  animType: string;
  animationData: AnimationData;
  animationID: string;
  assets: any[];
  assetsPath: string;
  autoloadSegments: boolean;
  autoplay: boolean;
  currentFrame: number;
  currentRawFrame: number;
  fileName: string;
  firstFrame: number;
  frameModifier: number;
  frameMult: number;
  frameRate: number;
  imagePreloader: any; // ImagePreloader ???
  isLoaded: boolean;
  isPaused: boolean;
  loop: boolean;
  name: string;
  path: string;
  pendingElements: number;
  playCount: number;
  playDirection: number;
  playSpeed: number;
  projectInterface: any;
  renderer: any; // SVGRenderer ???
  segmentPos: number;
  segments: any[];
  subframeEnabled: boolean;
  timeCompleted: number;
  totalFrames: number;
  wrapper: any; // HTMLElement or angular element

  // from prototype
  addEventListener: (eventName: string, callback: (e: any) => void) => void;
  play: () => void;
  stop: () => void;
  playSegments: (startingEndingFrame: [number, number], toto: boolean) => void;
}

export class AnimationData {
  layers: any[];
  markers: Marker[];
}

/**
 * Markers are added by motion designer while designing the animation on After effect.
 * Those markers allow to highlight a sub set of frames of the animation
 */
export class Marker {
  /** marked frame */
  tm: number;
  /** sequence name */
  cm: string;
  /** ??? */
  dr: number;
}

class BMEnterFrameEvent {
  currentTime: number;
  direction: number;
  totalTime: number;
  type: string;
}
