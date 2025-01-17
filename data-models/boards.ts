export class Boards {
  created: string;
  id: number;
  name: string;
  starred: boolean;
  user: number;
}

export class BoardBuilder {
  boards: Boards;

  constructor() {
    this.boards = new Boards();
  }

  withStaticData() {
    this.boards.created = '2024-12-19';
    this.boards.id = 576313069;
    this.boards.name = 'newName';
    this.boards.starred = false;
    this.boards.user = 1;

    return this;
  }

  build() {
    return this.boards;
  }
}
