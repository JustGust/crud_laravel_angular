import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBillComponent } from './board/list-bill/list-bill.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { AuthGuard } from "./guard/auth.guard";
import { SaveBillComponent } from './board/save-bill/save-bill.component';

const routes: Routes = [
  {
    path: '', component:LoginComponent,
  
  },
  {
    path: 'login', component:LoginComponent,
   
  },
  {
    path: 'listBill', component:ListBillComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'createBill', component:SaveBillComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'registerUser', component:RegisterComponent,
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
