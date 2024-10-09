export class ErrorResponse {
  errors: { [key: string]: string[] };

  constructor() {
    this.errors = {};
  }
}

export class ErrorResponseBuilder {
  errorResponse: ErrorResponse;

  constructor() {
    this.errorResponse = new ErrorResponse();
  }

  withError(key: string, message: string) {
    if (!this.errorResponse.errors[key]) {
      this.errorResponse.errors[key] = [];
    }
    this.errorResponse.errors[key].push(message);
    return this;
  }

  withLoginError() {
    this.errorResponse.errors = {
      'email or password': ['is invalid'],
    };
    return this;
  }

  build() {
    return this.errorResponse;
  }
}
