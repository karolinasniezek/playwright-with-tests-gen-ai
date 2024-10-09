import { faker } from '@faker-js/faker';

export class Comments {
  comments: string[];
}

export class CommentsBuilder {
  comments: Comments;

  constructor() {
    this.comments = new Comments();
  }

  withRandomComment() {
    this.comments.comments = [faker.lorem.words(7)];
    return this;
  }

  withStaticComment() {
    this.comments.comments = ['This is a comment'];
    return this;
  }

  withNoComments() {
    this.comments.comments = [];
    return this;
  }

  build() {
    return this.comments;
  }
}
