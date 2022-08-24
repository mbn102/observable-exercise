import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  genders=['male','female'];
  inputForm:FormGroup|any;
  bannedEmails=['mobin@yahoo.com','ali@g.com']
  ngOnInit(): void {
    this.inputForm= new FormGroup({
      'info':new FormGroup({
        'username': new FormControl(null,[Validators.required,this.bannedUserName]),
        'email': new FormControl(null,[Validators.required,Validators.email,this.bannedEmailCheck.bind(this)]),
        'password': new FormControl(null,Validators.required)
      }),
      'gender': new FormControl('male',Validators.required),
      'colors': new FormArray([])
    })
  }
  onSubmit(){
    console.log(this.inputForm)
  }
  onAddColor(){
    const control=new FormControl(null,Validators.required);
    (<FormArray>this.inputForm.get('colors')).push(control);
  }

  get colors(): FormArray{
    return this.inputForm.get('colors') as FormArray
  }
  bannedEmailCheck(control:FormControl):{[e:string]:boolean}{
    if (this.bannedEmails.indexOf(control.value)!== -1){
      return {'isBannedEmail':true};
    }
    return null as any;
  };
  bannedUserName(control:FormControl): Promise<any>|Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'foad') {
          resolve({"usernameIsBanned": true});
        } else {
          resolve(null)
        }

      }, 2000)
    })
    return promise;

  }

}
