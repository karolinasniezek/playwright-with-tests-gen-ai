import { Author, AuthorBuilder } from './author';
import { faker } from '@faker-js/faker';

export class Article {
  title: string;
  slug: string;
  author: Author;
  description: string;
  body: string;
  tagList: string[];
  favoritesCount: number;
  favorited: boolean;
  createdAt: string;
  updatedAt: string;
}

export class ArticleBuilder {
  article: Article;

  constructor() {
    this.article = new Article();
  }

  withRandomData() {
    this.article.author = new AuthorBuilder().withRandomData().build();
    this.article.body = faker.lorem.words(20);
    this.article.description = faker.lorem.words(6);
    this.article.favorited = faker.helpers.arrayElement([true, false]);
    if (this.article.favorited) {
      this.article.favoritesCount = faker.number.int({ min: 1, max: 99 });
    } else {
      this.article.favoritesCount = 0;
    }
    this.article.title = faker.lorem.words(5);
    this.article.tagList = [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()];
    this.article.slug = this.withSlug(this.article.title).article.slug;
    this.article.createdAt = faker.date.recent().toISOString();
    this.article.updatedAt = faker.date.recent().toISOString();

    return this;
  }

  withStaticData() {
    this.article.author = new AuthorBuilder().withStaticData().build();
    this.article.body = 'This is a body of an article';
    this.article.description = 'This is a description of an article';
    this.article.favorited = false;
    this.article.favoritesCount = 0;
    this.article.title = 'This is a title of an article';
    this.article.tagList = ['tag1', 'tag2', 'tag3'];
    this.article.slug = this.withSlug(this.article.title).article.slug;
    this.article.createdAt = new Date('2024-05-16').toISOString();
    this.article.updatedAt = new Date('2024-05-17').toISOString();

    return this;
  }

  withSlug(title: string) {
    this.article.slug = title.split(' ').join('-');
    return this;
  }

  withFavorited(favorited: boolean) {
    this.article.favorited = favorited;
    return this;
  }

  build() {
    return this.article;
  }
}
