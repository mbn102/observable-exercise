import { Component, OnInit } from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {ITodo} from "../../models/ITodo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  public http$: Observable<ITodo[]> | any;
  public  OnDoneTask$:Observable<ITodo[]> | any;
  public  DoneTask$:Observable<ITodo[]> | any;
  tabs = [1, 2];


  public  ngOnInit(){

    this.http$=new Observable((observer)=>{
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response)=>{
          return response.json()})
        .then(data=>{observer.next(data)
          observer.complete()})
        .catch(err=>observer.error(err))
    })
    this.http$=this.http$.pipe(shareReplay());

    this.DoneTask$=this.http$.pipe(map((todo:any)=>todo.filter((todo:any)=>todo.completed)));
    this.OnDoneTask$=this.http$.pipe(map((todo:any)=>todo.filter((todo:any)=>!todo.completed)));

  }

}
