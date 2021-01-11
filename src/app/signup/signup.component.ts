import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup() {
    alert("Successfully Signed Up!!!");
    this._router.navigate(['/login']);
  }
  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

}
