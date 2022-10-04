import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  onSubmit(){
    console.warn(this.myform.value);
  }
  
  name = '';
  

}
