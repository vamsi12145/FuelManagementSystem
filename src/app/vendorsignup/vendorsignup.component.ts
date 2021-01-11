import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendorsignup',
  templateUrl: './vendorsignup.component.html',
  styleUrls: ['./vendorsignup.component.css']
})
export class VendorsignupComponent implements OnInit {
vendor=new Vendor();
isFormSubmitted:boolean;
  message:String;
  constructor(private _router : Router,private venserv:VendorService) { }
  vsignin(signinForm:NgForm){
    this.isFormSubmitted = false;
    // this.flag = 0;
    if(signinForm.invalid) {
      return;
    }
    this.vendor.vendor_wal=0;
    this.vendor.vendor_id=this.vendor.vendor_name.substring(1,3) + String(this.vendor.phone_no).substring(0,3)
    console.log(JSON.stringify(this.vendor))
    this.venserv.insertVendor(this.vendor);
    this._router.navigate(['/customer']);
     this.isFormSubmitted=true;
  }

  ngOnInit(): void {
  }

}
