import { Logger } from '../logger/type/logger';

export class ExceptionHandler {
  constructor(private logger: Logger) {}

  async handle(error: unknown) {
    await this.logger.error(error);
  }
}
