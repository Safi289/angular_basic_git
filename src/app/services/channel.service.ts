import { Injectable } from '@angular/core';
import { DependServiceService } from './depend-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  url:string = 'http://127.0.0.1:8000';
  constructor(private dService: DependServiceService, private http: HttpClient) {
    console.log(dService.log());
   }
   getChannels(): Observable<any>{
    const channels = this.http.get<any>(`${this.url}/api/channel`);
    return channels;
   }

  display(){
    return "Welcom to virtual world";
  }
  getValue(v:string){
    console.log(v);
  }
}
