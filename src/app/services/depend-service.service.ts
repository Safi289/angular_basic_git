import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DependServiceService {

  message = "My Service Data";
  constructor() { }

  log(){
    return this.message;
  }
}
