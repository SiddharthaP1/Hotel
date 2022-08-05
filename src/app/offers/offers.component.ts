import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
ele1:string='';
  constructor(private usersService:UserService) { 
    this.usersService.cast4.subscribe(val1=>this.ele1=val1);
  }
  value1:number = 0;
  value2:number = 0;
  value3:number = 0;


  ngOnInit(): void {
    
  }
  increase(value1:number){
    this.value1++;
    this.usersService.editval1(this.value1)
    return value1;
    
  }

  decrease(value1:number){
    if(this.value1>0){
      this.value1--;
    }
    this.usersService.editval1(this.value1)
    return value1
  }
  increase2(value2:number){
    this.value2++;
    this.usersService.editval2(this.value2)
    return value2
  }

  decrease2(value2:number){
    if(this.value2>0){
      this.value2--;
    }
    this.usersService.editval2(this.value2)
    return value2
  }
  increase3(value3:number){
    this.value3++;
    this.usersService.editval3(this.value3)
    return value3
  }

  decrease3(value3:number){
    if(this.value3>0){
      this.value3--;
    }
    this.usersService.editval3(this.value3)
    return value3
  }

  
  
}
