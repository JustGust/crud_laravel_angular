import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  message: string = '';

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({

      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
  
    });
  }

  get f(){
    return this.form.controls;
  }

  login(){
    console.log(this.form.value);
    this._userService.login(this.form.value).subscribe({
      next: (v) => {
        localStorage.setItem('token', v.access_token);
        this._router.navigate(['/listBill']);
        console.log('inicio exitoso');
      },
      
      error: (e) => {
       this.message = 'Usuario y/o contraseña incorrecta'
      }
    })
  }

  }


