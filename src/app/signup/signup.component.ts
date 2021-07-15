import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private dataService: DataServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  errorsForUser: string[] = [];

  registerationForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.email,
      SignupComponent.passwordlength,
    ]),
  });

  static passwordlength(control: FormControl) {
    if (control.value.length < 8) {
      return { lengthLimit: { rule: 8, currentValue: control.value.length } };
    }
    return null;
  }

  get username() {
    return this.registerationForm.get('username')!;
  }
  get email() {
    return this.registerationForm.get('email')!;
  }
  get password() {
    return this.registerationForm.get('password')!;
  }

  OnSignupClick() {
    this.errorsForUser.length = 0;
    const valueForService = this.registerationForm.value;
    this.dataService.signupUser(valueForService).subscribe(
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
