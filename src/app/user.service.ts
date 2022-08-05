import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UserService {


  editval1(newVal1:number){
    this.val1.next(newVal1)
  }
  private val1 = new Subject<number>();
cast = this.val1.asObservable();

private val2 = new Subject<any>();
cast2 = this.val2.asObservable();

private val3 = new Subject<any>();
cast3 = this.val3.asObservable();

private val4 = new Subject<any>();
cast4 = this.val4.asObservable();

changeOffer1(ele:string){
  this.val4.next(ele)
}
changeOffer2(ele:string){
  this.val4.next(ele)
}


  constructor() { 
    
  }

  
  editval2(newVal2:number){
    this.val2.next(newVal2)
  }
  editval3(newVal3:number){
    this.val3.next(newVal3)
  }
}
