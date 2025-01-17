import { Task, TaskBuilder } from './task';
import { List, ListBuilder } from './list';

export class Board {
  name: string;
  user: number;
  id: number;
  starred: boolean;
  created: string;
  lists: List[];
  tasks: Task[];
}
export class BoardWIthIdBuilder {
  board: Board;

  constructor() {
    this.board = new Board();
  }

  withStaticData() {
    this.board.created = '2024-12-19';
    this.board.id = 576313069;
    this.board.name = 'new mocked board';
    this.board.starred = false;
    this.board.user = 1;
    this.board.lists = [];
    this.board.tasks = [];

    return this;
  }

  with2Tasks() {
    this.board.lists = [
      new ListBuilder().withStaticDataList().build(),
      new ListBuilder().withStaticDataList('new list').build(),
    ];
    this.board.tasks = [
      new TaskBuilder().withStaticDataTask().build(),
      new TaskBuilder().withStaticDataTask('Task 2').build(),
    ];

    return this;
  }

  build() {
    return this.board;
  }
}
