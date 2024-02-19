import { ConfigEnv } from '../config/config-env';
import { Config } from '../config/type/config';
import { LoggerConfig } from '../logger/logger-config';
import { LoggerConsole } from '../logger/logger-console';
import { Logger } from '../logger/type/logger';
import { usePackageJson } from '../packageJson/use-package-json';
import { Signal } from '../process/signal/type/signal';
import { App } from './type/app';

export abstract class AppBase implements App {
  protected config: Config;
  protected logger: Logger;

  constructor() {
    this.config = new ConfigEnv();

    const { appName } = usePackageJson();
    const loggerConfig = new LoggerConfig(`[${appName}]:`);
    this.logger = new LoggerConsole(loggerConfig);

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
