import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
//import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustScreenComponent } from './cust-screen/cust-screen.component';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
import { FuellistComponent } from './fuellist/fuellist.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { RouterModule, Routes } from '@angular/router';
//import { AppRoutingModule, routingComponents } from './app-routing.module';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { SignupComponent } from './signup/signup.component';
import { VendorhomeComponent } from './vendorhome/vendorhome.component';
import { VendoraccountComponent } from './vendoraccount/vendoraccount.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { NormalComponent } from './normal/normal.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { WalletComponent } from './wallet/wallet.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorsignupComponent } from './vendorsignup/vendorsignup.component';
import { CustomerComponent } from './customer/customer.component';
import { VendorcartComponent } from './vendorcart/vendorcart.component';
import { AcceptrejectComponent } from './acceptreject/acceptreject.component';
import { VwalletComponent } from './vwallet/vwallet.component';

const routes : Routes = [
  {path : 'adminsignup', component : AdminsignupComponent},
  {path : 'customerSignup', component : SignupComponent},
  {path : 'vendorprofile', component : VendoraccountComponent},
  {path : 'vendorhome', component : VendorhomeComponent},
  {path : 'vendorlogin', component : VendorloginComponent},
  {path : 'myaccount', component : MyaccountComponent},
  {path : 'customerHome', component : CustomerhomeComponent},
  {path : 'responsive', component : ResponsiveComponent},
  {path : 'normal', component : NormalComponent},
  {path : 'order', component : OrderComponent},
  {path:'cart', component : CartComponent},
  {path:'about', component : AboutComponent},
  {path:'wallet', component : WalletComponent},
  {path:'vend', component : VendorComponent},
  {path:'vendorsignup', component:VendorsignupComponent},
  {path:'customer', component:CustomerComponent},
  {path:'vendorcart', component:VendorcartComponent},
  {path:'ar', component:AcceptrejectComponent},
  {path:'vwallet', component:VwalletComponent},
  {path : '', component : HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //routingComponents,
    CustScreenComponent,
    // LoginComponent,
    // SignupComponent,
    FuellistComponent,
    CustomerloginComponent,
    CustomerhomeComponent,
    MyaccountComponent,
    SignupComponent,
    VendorhomeComponent,
    VendoraccountComponent,
    VendorloginComponent,
    AdminsignupComponent,
    ResponsiveComponent,
    NormalComponent,
    OrderComponent,
    CartComponent,
    AboutComponent,
    WalletComponent,
    VendorComponent,
    VendorsignupComponent,
    CustomerComponent,
    VendorcartComponent,
    AcceptrejectComponent,
    VwalletComponent
  ],
  exports:[RouterModule],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
