export class LoggerConfig {
  constructor(private _prefix: string) {}

  get prefix() {
    return this._prefix;
  }
}
