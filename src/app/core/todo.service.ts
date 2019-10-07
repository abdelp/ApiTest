import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient, /*private adapter: TodoAdapter,*/) { }

  getTodos(): Observable<Todo[]> {
    const url = `${this.baseUrl}/`;

    return this.http.get<Todo[]>(url);
  }

  getUsers(userId: number): Observable<User[]> {
    this.baseUrl = `https://jsonplaceholder.typicode.com/users/{userId}`;
    const url=`${this.baseUrl}/`

    return this.http.get<User[]>(url);
  }

  httpGet(url) {
    return new Promise( async (resolve, reject) => {
      const result = await fetch(url);
      const data = await result.json();
      resolve(data);
    });
  }
}
