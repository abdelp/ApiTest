import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Todo {
    constructor(
        complexted: boolean,
        id: number,
        title: string,
        userId: number
    ) { }
  }

@Injectable({
    providedIn: 'root'
})
export class TodoAdapter implements Adapter<Todo> {

  adapt(item: any): Todo {
    return new Todo(
        item.completed,
        item.id,
        item.title,
        item.userId
    );
  }
}