import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {}

  OnLoginClick() {
    console.log('user is ' + this.dataService.getLoggedIn());
    this.dataService.setLoggedIn(!this.dataService.getLoggedIn());
    console.log('user is ' + this.dataService.getLoggedIn());

    this.dataService.userNav.next(this.dataService.getLoggedIn());
  }
}
