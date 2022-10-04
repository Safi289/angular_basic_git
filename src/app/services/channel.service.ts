import { Injectable } from '@angular/core';
import { DependServiceService } from './depend-service.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private dService: DependServiceService) {
    console.log(dService.log());
   }

  display(){
    return "Welcom to virtual world";
  }
  getValue(v:string){
    console.log(v);
  }
}
