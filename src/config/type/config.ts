export interface Config {
  get<T>(entryName: string, entryDefaultValue?: T): T;
}
