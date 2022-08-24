import { Component, OnInit } from '@angular/core';
import {Observable, shareReplay, map, delay} from "rxjs";
import {IPhoto} from "../../models/IPhoto";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  public Photo$:Observable<IPhoto[]>|any;
  public Photo10$:Observable<IPhoto[]>|any;
  public PhotoLength:number|any;


  constructor() { }

  ngOnInit(): void {

    this.Photo$=new Observable((observer)=>{
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response)=>{
          return response.json()})
        .then(data=>{observer.next(data)
          observer.complete()})
        .catch(err=>observer.error(err))

    })
    this.Photo$=this.Photo$.pipe(shareReplay());
    this.Photo10$=this.Photo$.pipe(map((photo:any)=>photo.filter((photo:any)=> photo.id>0 && photo.id<101 )))
    this.Photo10$.pipe(map((result:any)=>{this.PhotoLength=result.length
       console.log(result.length)}))
    console.log('rr',this.PhotoLength)
    console.log("eee",this.Photo10$.length);
  }


}
