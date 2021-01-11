import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { Orders } from '../orders';
import { OrdersService } from '../orders.service';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-vendorcart',
  templateUrl: './vendorcart.component.html',
  styleUrls: ['./vendorcart.component.css']
})
export class VendorcartComponent implements OnInit {
  orders:Observable<Orders[]>;
  vend:Vendor;
 constructor(private ordserv: OrdersService) { 
   this.vend = JSON.parse(localStorage.getItem('vendor') || '{}');
   this.orders=this.ordserv.getVendor(this.vend.vendor_id);
 }
  ngOnInit(): void {
  }

}
