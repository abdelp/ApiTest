import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Location } from '@angular/common';
import { Todo } from './../core/todo.model';

@Component({
  selector: 'page-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.scss']
})
export class UserComponent implements OnInit{
  todos: Todo[];
  page: number = 1;
  data: any = [];

  constructor(
    private authService: AuthService,
    private location: Location
  ) {

  }

  ngOnInit(): void {
    this.generateTodos();
  }

  generateTodos() {

    const promises = [
      this.httpGet('https://jsonplaceholder.typicode.com/todos'),
      this.httpGet('https://jsonplaceholder.typicode.com/users')
    ];

    Promise.all(promises).then( results => {
      const todos:any = results[0];
      const users:any = results[1];
      const result = todos.map( t => {
        t.user = users.filter( u => u.id === t.userId );

        return t;
      });

      this.todos = result;

    });

  }

  httpGet(url) {
    return new Promise( async (resolve, reject) => {
      const result = await fetch(url);
      const data = await result.json();
      resolve(data);
    });
  }

  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.location.back();
    }, (error) => {
      console.log("Logout error", error);
    });
  }
}
