import { FormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from './login.model';

@Component({
  selector: 'app-loginpage',
  imports: [FormsModule],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.css',
})
export class Loginpage {
  login: LoginModel = {
    username: '',
    password: '',
    remember: false,
  };
  message = '';
  router = inject(Router);
  check() {
    if (this.login.username == 'admin' && this.login.password == 'admin') {
      this.router.navigateByUrl('/admin');
    }
    else {
      this.message = 'نام کاربری یا رمز ورود اشتباه است.';
    }
  }
}
