export class SuccessfulLoginResponse {}

export class SuccessfulLoginResponseBuilder {
  successfulLoginResponse: SuccessfulLoginResponse;

  constructor() {
    this.successfulLoginResponse = new SuccessfulLoginResponse();
  }

  build() {
    return this.successfulLoginResponse;
  }
}
