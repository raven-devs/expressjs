import { ConfigEnv } from '../config/config-env';
import { Config } from '../config/type/config';
import { LoggerConsole } from '../logger/logger-console';
import { Logger } from '../logger/type/logger';
import { Signal } from '../signal/type/signal';
import { App } from './type/app';

export abstract class AppBase implements App {
  protected config: Config;
  protected logger: Logger;

  constructor() {
    this.config = new ConfigEnv();
    this.logger = new LoggerConsole();

    this.subscribeOnStop();
  }

  private subscribeOnStop() {
    process.on(Signal.INTERRUPT, this.onStop);
    process.on(Signal.TERMINATE, this.onStop);
    process.on(Signal.USER1, this.onStop);
    process.on(Signal.USER2, this.onStop);
  }

  abstract start(): void;

  abstract onStop(signal: Signal): void;
}
