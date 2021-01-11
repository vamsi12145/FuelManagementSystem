import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {

  signup() {
    alert("Successfully Signed Up!!!");
    this._router.navigate(['/vendorlogin']);
  }

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

}
