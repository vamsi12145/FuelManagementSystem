import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-responsive',
  templateUrl: './responsive.component.html',
  styleUrls: ['./responsive.component.css']
})
export class ResponsiveComponent implements OnInit {
  customer=new Customer();
  isFormSubmitted:boolean;
  message:String;
  constructor(private _router : Router,private custserv:CustomerService) { }
  signup(signupForm:NgForm){
    this.isFormSubmitted = false;
    // this.flag = 0;
    if(signupForm.invalid) {
      return;
    }
    this.customer.cust_wal=0;
    this.customer.cust_id=this.customer.cust_name.substring(1,3) + String(this.customer.phone_num).substring(0,3)
    console.log(JSON.stringify(this.customer))
    this.custserv.insertCustomer(this.customer);
    this._router.navigate(['/vendorlogin']);
     this.isFormSubmitted=true;
  }
  ngOnInit(): void {
  }

}
