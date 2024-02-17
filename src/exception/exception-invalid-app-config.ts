export class ExceptionInvalidAppConfig extends Error {
  constructor(message?: string) {
    super(message ?? 'Invalid application configuration');

    this.name = 'ExceptionInvalidAppConfig';
  }
}
