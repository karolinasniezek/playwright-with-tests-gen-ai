export class List {
  boardId: number;
  title: string;
  id: number;
  created: string;
}

export class ListBuilder {
  list: List;

  constructor() {
    this.list = new List();
  }

  withStaticDataList(listName: string = 'name11') {
    this.list.boardId = 17871716373;
    this.list.title = listName;
    this.list.id = 62271064206;
    this.list.created = '2024-12-22';

    return this;
  }

  withNewName(name: string) {
    this.list.title = name;

    return this;
  }

  build() {
    return this.list;
  }
}
