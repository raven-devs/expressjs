import { usePackageJson } from '../packageJson/use-package-json';
import { Logger } from './type/logger';
import { LoggerConfig } from './type/logger-config';

export class LoggerConsole implements Logger {
  private config: LoggerConfig;

  constructor() {
    const { appFullName } = usePackageJson();
    const config: LoggerConfig = {
      prefix: `[${appFullName}]:`,
    };

    this.config = config;
  }

  log(...args: unknown[]): void {
    const argsUpdated = this.prepareArgs(args);
    // eslint-disable-next-line
    console.log(...argsUpdated);
  }

  error(...args: unknown[]): void {
    const argsUpdated = this.prepareArgs(args);
    console.error(...argsUpdated);
  }

  private prepareArgs(args: unknown[]): unknown[] {
    return [this.config.prefix, ...args];
  }
}
