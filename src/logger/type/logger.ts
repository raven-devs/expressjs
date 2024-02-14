export interface Logger {
  log(...args: unknown[]): Promise<void> | void;
  error(...args: unknown[]): Promise<void> | void;
}
