export class ErrorResponse {
  error: string;

  constructor() {
    this.error = '';
  }
}

export class ErrorResponseBuilder {
  errorResponse: ErrorResponse;

  constructor() {
    this.errorResponse = new ErrorResponse();
  }

  withNoLoginDataError() {
    this.errorResponse.error = 'Email and password are required';
    return this;
  }

  build() {
    return this.errorResponse;
  }
}
