import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './shared/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl = 'http://127.0.0.1:3000/';
  TODO = 'todos'
  constructor(
    private http: HttpClient
  ) { }

  getPing() {
    return this.http.get<string>(this.baseUrl + 'ping')
  }

  addTodo(todo: Todo) {
    return this.http.post(this.baseUrl + this.TODO, todo);
  }

  listTodo() {
    return this.http.get(this.baseUrl + this.TODO);
  }

  markTodo(todo: Todo) {
    return this.http.patch(this.baseUrl + this.TODO + '/' + todo.id, todo);
  }
}
