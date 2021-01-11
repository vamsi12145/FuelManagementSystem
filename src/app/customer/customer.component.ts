import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
// vendor:Observable<Vendor>;
vendor:Vendor;
 isFormSubmitted:boolean;
 password:String;
 name:String;
 login(loginForm:NgForm) {
  this.isFormSubmitted = false;
  // this.flag = 0;
  if(loginForm.invalid) {
    return;
    
  }
  alert(this.password);
   //this.vendor=this.venserv.getVendors(this.password);
   //alert(this.vendor.);
  this.venserv.getVendors(this.password).subscribe(x=>{
    this.vendor=x;
    alert(this.vendor.vendor_name);
    localStorage.setItem('vendor',JSON.stringify(x));
    alert(this.name+"Login success");
  })
  this._router.navigate(['/vend']);
   this.isFormSubmitted=true;
}
  constructor(private _router : Router,private venserv :VendorService) { }

  ngOnInit(): void {
  }

}
