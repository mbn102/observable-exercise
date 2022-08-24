import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhotosComponent} from "./components/photos/photos.component";
import {TodoComponent} from "./components/todo/todo.component";
import {TodoLsitComponent} from "./components/todo-lsit/todo-lsit.component";
import {WeatherComponent} from "./components/weather/weather.component";
import {FormComponent} from "./components/form/form.component";

const routes: Routes = [
  {path:"",component:PhotosComponent},
  {path:"Check list",component:TodoComponent},
  {path:"Todo list",component:TodoLsitComponent},
  {path:"Weather",component:WeatherComponent},
  {path:"Form",component:FormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
