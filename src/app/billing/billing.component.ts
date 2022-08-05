import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
bill:number=0;
semi:number=10500;
simple:number=11250;
deluxe:number=12750;
se:number=0;
si:number=0; 
de:number=0;

  constructor(private usersService: UserService) {
    this.usersService.cast.subscribe(val1=>this.se=val1);
    this.usersService.cast2.subscribe(val2=>this.si=val2);
    this.usersService.cast3.subscribe(val3=>this.de=val3);
   }

  
  ngOnInit(): void {}
  
total(){}



}
