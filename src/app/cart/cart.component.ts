import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { Orders } from '../orders';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   orders:Observable<Orders[]>;
   cust:Customer;
  constructor(private ordserv: OrdersService) { 
    this.cust = JSON.parse(localStorage.getItem('customer') || '{}');
    this.orders=this.ordserv.getOrders(this.cust.cust_id);
  }

  ngOnInit(): void {
  }

}
