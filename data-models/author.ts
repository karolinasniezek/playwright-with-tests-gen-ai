import { faker } from '@faker-js/faker';

export class Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export class AuthorBuilder {
  author: Author;

  constructor() {
    this.author = new Author();
  }

  withRandomData() {
    this.author.username = faker.lorem.word(10);
    this.author.bio = faker.lorem.word(10);
    this.author.following = faker.helpers.arrayElement([true, false]);
    this.author.image = faker.image.url();
    return this;
  }

  withStaticData() {
    this.author.username = 'test.user';
    this.author.bio = 'This is a bio of a user';
    this.author.following = false;
    this.author.image = 'https://playwright.dev/img/playwright-logo.svg';
    return this;
  }

  withUserName(username: string) {
    this.author.username = username;
    return this;
  }

  withBio(bio: string) {
    this.author.bio = bio;
    return this;
  }

  withFollowing(following: boolean) {
    this.author.following = following;
    return this;
  }

  withImage(image: string) {
    this.author.image = image;
    return this;
  }

  build() {
    return this.author;
  }
}
