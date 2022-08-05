import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
ele1:number=0;
ele2:number=0;
det:number=0;
detail:string='TV | Air Conditioning | Wi-fi | Tea-Coffee | Magzine...';
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  changeCoupon1(){
    this.ele2=0;
    if(this.ele1==0){
      this.ele1=1;
      this.userService.changeOffer1("SUMMER25");
    }else{
      this.userService.changeOffer1('');
      this.ele1=0;
    }
  }
  changeCoupon2(){
    this.ele1=0;
    if(this.ele2==0){
      this.ele2=1;
      this.userService.changeOffer2("PROMO10");      
    }else{
      this.userService.changeOffer2('')
      this.ele2=0;
    }
  }

  viewDetail(){
    
    this.detail='TV | Air Conditioning | Wi-fi | Tea-Coffee | Magzine | Room';
  }

}
