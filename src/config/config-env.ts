import dotenv from 'dotenv';
import { Config } from './type/config';

export class ConfigEnv implements Config {
  constructor() {
    const env = dotenv.config({ path: './.env' });
    if (env.error) {
      throw env.error;
    }
  }

  get<T>(entryName: string, entryDefaultValue?: unknown): T {
    return (process.env[entryName] || entryDefaultValue) as T;
  }
}
