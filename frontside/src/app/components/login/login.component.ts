import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { slowOnset } from 'src/app/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    slowOnset
  ]
})
export class LoginComponent implements OnInit {

  logged: boolean = false;
  username: string = "";
  password: string = "";

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  login() {
    this.loginService.login(this.username, this.password).subscribe((data) => {

      localStorage.setItem('token', data.token);

      this.logged = true;
      this.username = '';
      this.password = '';
    })
    this.router.navigate(['']);
  }

  logout() {
    this.logged = false;
    localStorage.removeItem('token');
  }
}