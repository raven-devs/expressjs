import { Signal } from '../../signal/type/signal';

export interface App {
  start(): void;
  onStop: (signal: Signal) => void;
}
