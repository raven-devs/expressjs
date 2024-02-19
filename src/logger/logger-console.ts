import { LoggerConfig } from './logger-config';
import { Logger } from './type/logger';

export class LoggerConsole implements Logger {
  constructor(private config: LoggerConfig) {}

  log(...args: unknown[]) {
    const argsUpdated = this.prepareArgs(args);
    // eslint-disable-next-line
    console.log(...argsUpdated);
  }

  error(...args: unknown[]) {
    const argsUpdated = this.prepareArgs(args);
    console.error(...argsUpdated);
  }

  private prepareArgs(args: unknown[]): unknown[] {
    return [this.config.prefix, ...args];
  }
}
