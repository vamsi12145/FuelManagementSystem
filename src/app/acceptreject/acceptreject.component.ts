import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Orders } from '../orders';
import { OrdersService } from '../orders.service';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-acceptreject',
  templateUrl: './acceptreject.component.html',
  styleUrls: ['./acceptreject.component.css']
})
export class AcceptrejectComponent implements OnInit {
  vend:Vendor;
  ordStatus:String;
  venId:String;
  orderList:Observable<Orders[]>;
  isFormSubmitted:boolean;
  orderId:number;
  order:Orders;
  status:String;
  msg:string;

  constructor(private ordserv:OrdersService,private vendserv:VendorService) {
    this.vend = JSON.parse(localStorage.getItem('vendor') || '{}');
    this.venId=this.vend.vendor_id;
    this.status="pending";
    this.orderList=this.ordserv.getPending(this.status,this.vend.vendor_id);
    alert(this.orderList);
   }
   acceptOrRejectOrder(form : NgForm) {
    this.isFormSubmitted = false;
    if(form.invalid) {
      return;
    }
    this.isFormSubmitted = true;
    this.ordserv.getOrder(this.orderId).subscribe(x=>{
    this.order=x;
    alert(this.order.order_id);
    //if(this.ordStatus=="Accept"){
      this.ordserv.acceptReject(this.orderId,this.venId,this.ordStatus).subscribe(x => {
        alert(x);
      })
      
     // this.order.order_status="Accepted";
    //}else{
      //this.order.order_status="denied";
   // }
    })
  
    //this._vendorService.acceptOrRejectOrder(this.ordId, this.venId, this.ordStatus).subscribe(x => {
      // alert("Hello");
     // this.message = x;
      //alert(this.message);
    //})
  }

  ngOnInit(): void {
  }

}
