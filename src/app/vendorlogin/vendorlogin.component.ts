import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-vendorlogin',
  templateUrl: './vendorlogin.component.html',
  styleUrls: ['./vendorlogin.component.css']
})
export class VendorloginComponent implements OnInit {
 isFormSubmitted:boolean;
 password:string;
 customer:Customer;
 name:string;
  login(loginForm:NgForm) {
    this.isFormSubmitted = false;
    // this.flag = 0;
    if(loginForm.invalid) {
      return;
    }
    this.custserv.getCustomer(this.password).subscribe(x=>{
      this.customer=x;
      localStorage.setItem('customer',JSON.stringify(x));
      alert(this.name+"Login success");
    });
    this._router.navigate(['/myaccount']);
     this.isFormSubmitted=true;
  }

  constructor(private _router : Router,private custserv :CustomerService) { }

  ngOnInit(): void {
  }

}
