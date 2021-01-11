import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vwallet',
  templateUrl: './vwallet.component.html',
  styleUrls: ['./vwallet.component.css']
})
export class VwalletComponent implements OnInit {
  vendor:Vendor;
  constructor(private venserv:VendorService) { 
  this.vendor = JSON.parse(localStorage.getItem('vendor') || '{}');
  }
  ngOnInit(): void {
  }

}
