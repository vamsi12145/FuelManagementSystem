import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import { bindCallback, Observable } from 'rxjs';
import'rxjs/add/operator/map';
import { Orders} from './orders';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  insertOrders(b:Orders) {
    let url = "http://localhost:5757/orderapi/booking"
     this.http.post(url,b).toPromise().then(response => {
      console.log(response);
    }).catch(e => {
      console.log(e.error.text);
      return e.error.text;
    });
  }
  getOrders(id:String) :Observable<Orders[]>{
    return this.http.get<Orders[]>("http://localhost:5757/orderapi/orders/"+id);
  }
  getVendor(vid:String):Observable<Orders[]> {
    return this.http.get<Orders[]>("http://localhost:5757/orderapi/vendor/"+vid);

  }
  getOrder(oid:number):Observable<Orders>{
    return this.http.get<Orders>("http://localhost:5757/orderapi/orderby/"+oid);
  }
  getPending(status:String,v_id:String):Observable<Orders[]>{
    return this.http.get<Orders[]>("http://localhost:5757/orderapi/pending/"+status+"/"+v_id);
  }
  acceptReject(o_id:number,v_id:String,status:String) : Observable<any>{
    return this.http.put<any>("http://localhost:5757/orderapi/acceptReject/"+o_id+"/"+v_id+"/"+status,null);
    //let url = "http://localhost:5757/orderapi/acceptReject/"+o_id+"/"+v_id+"/"+status
    //this.http.put(url,null).toPromise().then(response => {
      //console.log(response);
    //}).catch(e => {
      //console.log(e.error.text);
      //return e.error.text;
    //});
    //return this.http.put<String>(url,o_id,v_id,status);

    
    //return this.http.put("http://localhost:5757/orderapi/acceptReject/"+o_id+"/"+v_id+"/"+status).map((res : Response) =>  res.text());
  }

  constructor(private http:HttpClient) { }
}
