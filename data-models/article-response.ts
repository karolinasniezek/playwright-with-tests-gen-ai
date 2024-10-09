import { Article, ArticleBuilder } from './article';

export class ArticleResponse {
  article: Article;
}

export class ArticleResponseBuilder {
  articleResponse: ArticleResponse;

  constructor() {
    this.articleResponse = new ArticleResponse();
  }

  withRandomData() {
    this.articleResponse.article = new ArticleBuilder().withRandomData().build();
    return this;
  }

  withStaticData() {
    this.articleResponse.article = new ArticleBuilder().withStaticData().build();
    return this;
  }

  withNotFavoritedArticle() {
    this.articleResponse.article.favorited = false;
    return this;
  }

  withNotFollowedAuthor() {
    this.articleResponse.article.author.following = false;
    return this;
  }

  build() {
    return this.articleResponse;
  }
}
