import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  message: string = '';

  constructor(private _userService: UserService, private _router: Router) {
    
    
   }

   ngOnInit(): void {
    this.form = new FormGroup({
      name:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
  
    });
  }

   get f(){
    return this.form.controls;
  }

  saveUser(){
    console.log(this.form.value);
    this._userService.registerUser(this.form.value).subscribe({
      next: (v) => {
        localStorage.setItem('token', v.access_token);
        this._router.navigate(['/listBill']);
        console.log('registro exitoso');
      },
      
      error: (e) => {
        this.message = e
      }
    })
}



}
