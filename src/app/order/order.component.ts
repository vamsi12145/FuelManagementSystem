import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Orders} from '../orders';
import {Fueltype} from '../fueltype'
import { FuelTypeService } from '../fuel-type.service';
import {Vendor} from '../vendor';
import { VendorService } from '../vendor.service';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order=new Orders();
  fueltype: Observable<Fueltype[]>;
  vendorlist:Observable<Vendor[]>;
  isFormSubmitted:boolean;
  fuel:Fueltype;
  m2:string;
  msg:string;
  customer:Customer;
  msg1:string;
  constructor(private router : Router, private orderserv:OrdersService,private fuelserv:FuelTypeService,private venserv:VendorService,private custserv:CustomerService) 
  {
    this.fueltype= fuelserv.getFuel();
    this.vendorlist=venserv.getVendor();
    //this.fuelserv.getFuelById(this.order.fuel_id).subscribe(x => {
      //this.fuel = x;
      //alert(this.fuel);
      //this.order.price = this.fuel.price * this.order.quantity;
    //});
    //this.customer = localStorage.getItem('customer')? JSON.parse(localStorage.getItem('customer')):[];
    this.customer = JSON.parse(localStorage.getItem('customer') || '{}');
    this.order.cust_id=this.customer.cust_id;
   }
  insert(orderForm:NgForm){
    this.order.order_status='pending';
    this.order.orderedon= new Date();
    //alert(new Date());
    alert(this.order.price);
      if (this.customer.cust_wal < this.order.price) {
        alert("Insufficient funds");
        alert("Feed Wallet");
        this.router.navigate(["/wallet"]);
      } else {
        this.customer.cust_wal = this.customer.cust_wal - this.order.price;
        alert(this.customer.cust_wal);
        this.custserv.updateWallet(this.customer.cust_id,this.order.price).subscribe(x=>{
          this.msg=x;

        })
        this.venserv.updateWallet(this.order.vendor_id,this.order.price).subscribe(x=>{
          this.msg1=x;
  
        })
        this.orderserv.insertOrders(this.order);
        alert("Order placed");
        
      }
    // this.orderserv.insertOrders(this.order);
  }
  showPrice() {
    this.fuelserv.getFuelById(this.order.fuel_id).subscribe(x => {
      this.fuel = x;
      alert(this.fuel.price);
      alert(this.order.quantity);
      alert(this.customer.cust_wal);
      this.order.price = this.fuel.price * this.order.quantity;
    });
  }
  
  ngOnInit(): void {
  }
  
}
