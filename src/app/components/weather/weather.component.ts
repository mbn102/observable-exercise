import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApixuService} from "./apixu.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weatherSearchForm : FormGroup|any;
  public weatherData: any;


  constructor(private formBuilder: FormBuilder,private apixuService: ApixuService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues:any) {
    console.log(formValues);
    this.apixuService
      .getWeather(formValues.location)
      .subscribe((data) => {
        this.weatherData = [data]
      })

  }

}
