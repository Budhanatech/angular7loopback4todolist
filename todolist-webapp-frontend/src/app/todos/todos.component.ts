import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  todo: Todo = {
    id: Date.now(),
    title: "",
    description: "",
    isDone: false  
  };

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.listTodo();
  }

  addTodo() {
    this.todoService.addTodo(this.todo).subscribe((data)=>{
      this.todos.push(data);
    });
  }

  listTodo() {
    this.todoService.listTodo().subscribe((data: Todo[])=>{
      this.todos = data;
    });
  }

  mark(todo) {
    todo.isDone = !todo.isDone;
    this.todoService.markTodo(todo).subscribe((data)=>{
      let index = this.todos.indexOf(todo);
      this.todos[index] = todo;
    });
  }
}
