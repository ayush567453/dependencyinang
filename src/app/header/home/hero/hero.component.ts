import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',

})
export class HeroComponent {
//1. HOW TO PROVIDE DEPENDENCY
  // constructor(private subService: SubscribeService){

  // }

  // subService = inject(SubscribeService);

  constructor(private subService:SubscribeService){}
 
  OnSubscribe(){
    
    this.subService.OnSubscribeClicked('Yearly');
    }
}
