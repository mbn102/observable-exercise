import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-lsit',
  templateUrl: './todo-lsit.component.html',
  styleUrls: ['./todo-lsit.component.css']
})
export class TodoLsitComponent implements OnInit {

  inputForm :FormGroup|any ;
  @ViewChild("task", {static: true}) task: ElementRef | any;
  list: any[] = [];
  max:boolean=false;

  public addTask(item: string) {
    this.list.push({id:this.list.length,name:item})
    console.log('task',this.task)
    this.task.nativeElement.value = null;
    console.log(this.inputForm)
  }

  public onRemove(id: number) {
    this.list = this.list.filter(item => item.id !== id)
  }
  public disabledButton(): boolean  {
    if (this.task.nativeElement.value == '') {
      return true
    }
    return false
  };
  public onEdit(id: number) {
    let tittle = this.list[id].name;
    let result=prompt("Edit Task",tittle);
    if (result !== null && result !== "") {
      this.list[id].name = result;
    }
  }



  ngOnInit():void{
    this.inputForm=new FormGroup({
      'task': new FormControl(null,[Validators.required,Validators.maxLength(60)])
    })
  }


}
