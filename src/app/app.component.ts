import { Component ,OnInit} from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {ITodo} from "./models/ITodo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'obsever';


   public  ngOnInit(){



 }
}
