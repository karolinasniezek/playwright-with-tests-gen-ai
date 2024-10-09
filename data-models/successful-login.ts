import { User, UserBuilder } from './user';

export class SuccessfulLoginResponse {
  user: User;
}

export class SuccessfulLoginResponseBuilder {
  successfulLoginResponse: SuccessfulLoginResponse;

  constructor() {
    this.successfulLoginResponse = new SuccessfulLoginResponse();
  }

  withRandomData() {
    this.successfulLoginResponse.user = new UserBuilder().withRandomData().build();
    return this;
  }

  build() {
    return this.successfulLoginResponse;
  }
}
