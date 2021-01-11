import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  customer : Customer;
  amount : number;
  msg : String;
  constructor(private router : Router, private custserv : CustomerService) {
    this.customer = JSON.parse(localStorage.getItem('customer') || '{}');
  }

  addMoney() {
    this.custserv.addMoney(this.customer.cust_id, this.amount).subscribe(x => {
      this.msg = x;
      alert(this.msg);
    })
    this.router.navigate(["/vendorlogin"]);
    // alert(this.customer.cust_wal);
  }

  ngOnInit(): void {
  }

}
