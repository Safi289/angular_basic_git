import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
export interface User{
  username: string,
  password: string
}
export interface Person{
  firstname: string,
}
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  user: User = {
    username: '',
    password: ''
  }
  person: Person = {
    firstname: '',
  }
  constructor() { 
    this.user = {} as User;
    this.person = {} as Person;
  }

  ngOnInit(): void {
  }

  myform = new FormGroup({
    username: new FormControl(this.user.username, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40),
    ]),
    password: new FormControl('')
  });

  get username(){
    return this.myform.get('username'); 
  }

  onSubmit(){
    console.warn(this.myform.value);
  }
  
  name = '';
  

}
