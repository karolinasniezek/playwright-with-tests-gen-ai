import { faker } from "@faker-js/faker";

export class Task {
  boardId: number;
  completed: boolean;
  description: string;
  listId: number;
  title: string;
  id: number;
  created: string;
  deadline: string;
  order: number;
}

export class TaskBuilder {
  task: Task;

  constructor() {
    this.task = new Task();
  }

  withStaticDataTask(taskName: string = 'Task 1') {
    this.task.boardId = 17871716373;
    this.task.completed = false;
    this.task.description = '';
    this.task.listId = 62271064206;
    this.task.title = taskName;
    this.task.id = Number(faker.string.numeric(11));
    this.task.created = '2024-12-23';
    this.task.deadline = '2024-12-26';

    return this;
  }

  withName(name: string) {
    this.task.order = 0;
    this.task.title = name;
    return this;
  }

  build() {
    return this.task;
  }
}
