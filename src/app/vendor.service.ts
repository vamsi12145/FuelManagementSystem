import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import { bindCallback, Observable } from 'rxjs';
import'rxjs/add/operator/map';
import { Vendor} from './vendor';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VendorService {
  getVendor(): Observable<Vendor[]> {
    return this.http.get<Vendor[]>("http://localhost:4545/vendorapi/vendors");
      
  }

  insertVendor(vend:Vendor) {
    this.http.post
    ("http://localhost:4545/vendorapi/insertVendor",vend).toPromise().then(response => {
      console.log(response);
    }).catch(e => {
      console.log(e.error.text);
      return e.error.text;
    });
  }
  getVendors(password:String): Observable<Vendor> {
    return this.http.get<Vendor>("http://localhost:4545/vendorapi/authenticate/"+password);
  }
  updateWallet(vendor_id:String,amount:number):Observable<string> {
    return this.http.put<string>("http://localhost:4545/vendorapi/updateWallet/"+vendor_id+"/"+amount,null);
  }
  constructor(private http:HttpClient) { }
}
