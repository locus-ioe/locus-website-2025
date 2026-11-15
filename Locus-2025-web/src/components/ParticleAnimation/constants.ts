
import { Colors } from './types';

export const DEFAULT_COLORS: Colors = {
  background: '#09030e',
  link: '#8d2b8f',
  text: '#df7fe6',
  particle: '#9d36a3',
  particleStroke: '#8d2b8f'
};

export const DEFAULT_PROPS = {
  opacity: 75,
  numParticles: 7,
  sizeMultiplier: 5,
  speed: 15,
  avoidMouse: false,
  width: 1,
  connections: true,
  connectionDensity: 7,
  noBounceH: false,
  noBounceV: false,
  speedH: 0.001,
  speedV: 0.001,
  hover: true,
  colors: DEFAULT_COLORS,
  className: ''
};
