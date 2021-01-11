import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import { bindCallback, Observable } from 'rxjs';
import'rxjs/add/operator/map';
import { Customer} from './customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getCustomer(password:String): Observable<Customer> {
    return this.http.get<Customer>("http://localhost:5656/details/authenticate/"+password);
  }
  insertCustomer(cust:Customer) {
    this.http.post
    ("http://localhost:5656/details/customer/",cust).toPromise().then(response => {
      console.log(response);
    }).catch(e => {
      console.log(e.error.text);
      return e.error.text;
    });
  }

  addMoney(cust_id:String, cust_wal:number):Observable<String> {
    return this.http.put<String>("http://localhost:5656/details/addMoney/"+cust_id+"/"+cust_wal,null);
  }
  updateWallet(cust_id:String,amount:number):Observable<string> {
    return this.http.put<string>("http://localhost:5656/details/updateWallet/"+cust_id+"/"+amount,null);
  }
  constructor(private http: HttpClient) { }
}
