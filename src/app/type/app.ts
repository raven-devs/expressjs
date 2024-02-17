import { Signal } from '../../process/signal/type/signal';

export interface App {
  start(): void;
  onStop: (signal: Signal) => void;
}
