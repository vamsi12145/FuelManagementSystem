import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { logging } from 'protractor';
import { CustomerloginComponent } from '../customerlogin/customerlogin.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // login() {
  //   this._router.navigate(['/login']);
  // }
  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

}
