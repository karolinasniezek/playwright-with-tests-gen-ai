import { faker } from '@faker-js/faker';

export class User {
  email: string;
  username: string;
  bio: string;
  image: string;
  token: string;
}

export class UserBuilder {
  user: User;

  constructor() {
    this.user = new User();
  }

  withRandomData() {
    this.user.email = faker.internet.email();
    this.user.bio = faker.person.bio();
    this.user.image = faker.image.avatar();
    this.user.token = faker.string.alphanumeric(60);

    return this;
  }

  withStaticData() {
    this.user.email = 'test.user@xebia.com';
    this.user.bio = 'This is a bio of a user';
    this.user.image = 'https://playwright.dev/img/playwright-logo.svg';
    this.user.token = 'eyJhbGci35awerwre3252fsesvrwv';

    return this;
  }

  build() {
    return this.user;
  }
}
