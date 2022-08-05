import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UserService {


  bill:number=0;
semi:number=10500;
simple:number=11250;
deluxe:number=12750;
se:number=0;
si:number=0; 
de:number=0;



  editval1(newVal1:number){
    this.val1.next(newVal1)
    this.val.next(this.semi*newVal1)
    this.se=newVal1
  }
  private val1 = new Subject<number>();
  private val = new Subject<number>();
cast = this.val1.asObservable();

private val2 = new Subject<any>();
cast2 = this.val2.asObservable();

private val3 = new Subject<any>();
cast3 = this.val3.asObservable();


  constructor() { 
    this.semi=this.semi*this.se;
    this.simple=this.simple*this.si;
    this.deluxe=this.deluxe*this.de;
    this.bill=this.semi+this.simple+this.deluxe;
  }

  
  editval2(newVal2:number){
    this.val2.next(newVal2)
  }
  editval3(newVal3:number){
    this.val3.next(newVal3)
  }
}
