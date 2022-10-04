import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../services/channel.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  title = "Hello, I AM Safi Ul Sahid!";
  items: any[] = [
    'name', 'fame', 'wealth'
  ];
  constructor(private chService: ChannelService) { }

  ngOnInit(): void {
    this.f();
  }
  f(){
    // return this.title;
    this.chService.getValue(this.title);
  }
  sum(){
    return 20+40;
  }
  message(){
    return this.chService.display();
  }

}
