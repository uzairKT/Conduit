import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private dataService: DataServiceService,
    private router: Router
  ) {}

  errorsForUser: string[] = [];

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      LoginComponent.passwordlength,
    ]),
  });

  static passwordlength(control: FormControl) {
    if (control.value.length < 8) {
      return { lengthLimit: { rule: 8, currentValue: control.value.length } };
    }
    return null;
  }

  get email() {
    return this.loginForm.get('email')!;
  }
  get password() {
    return this.loginForm.get('password')!;
  }

  ngOnInit(): void {}

  OnLoginClick() {
    // console.log('user is ' + this.dataService.getLoggedIn());
    // this.dataService.setLoggedIn(!this.dataService.getLoggedIn());

    // console.log('user is ' + this.dataService.getLoggedIn());

    this.errorsForUser.length = 0;
    const valueForService = this.loginForm.value;
    this.dataService.loginUser(valueForService).subscribe(
      (data) => {
        this.dataService.setLoggedIn(data.token, data.username);
        this.dataService.userNav.next(this.dataService.getLoggedIn());
        this.router.navigate(['']);
      },
      (err) => {
        if (err instanceof HttpErrorResponse && err.status === 422) {
          Object.keys(err.error.errors).forEach((k) => {
            err.error.errors[k].forEach((e: string) => {
              this.errorsForUser.push(k + ' ' + e);
            });
          });
        } else {
          alert('server is not OK..');
        }
      }
    );
  }
}
