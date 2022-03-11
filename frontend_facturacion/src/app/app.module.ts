import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';
import { SaveBillComponent } from './board/save-bill/save-bill.component';
import { ListBillComponent } from './board/list-bill/list-bill.component';
import { UserService } from './services/user.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthGuard } from './guard/auth.guard';

import{ FormsModule, ReactiveFormsModule } from "@angular/forms";
import{ HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BillService } from './services/bill.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    SaveBillComponent,
    ListBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    UserService,
    BillService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
