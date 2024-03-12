import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
 
})
export class HeaderComponent {
  selectedTab: string = 'home';

  //1. HOW TO PROVIDE DEPENDENCY
  // constructor(private subService: SubscribeService){

  // }

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  constructor(private subService:SubscribeService){}
 
  OnSubscribe(){
    
    this.subService.OnSubscribeClicked('Monthly');
    }
}
