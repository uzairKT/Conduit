import { SlicePipe } from '@angular/common';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { JsonData } from 'src/data';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'conduit';

  constructor(
    private dataService: DataServiceService,
    private router: Router
  ) {}

  user = false;
  userName = '';

  ngOnInit(): void {
    this.user = this.dataService.getLoggedIn();
    this.dataService.userNav.subscribe((newUSer: any) => {
      this.user = newUSer;
    });
    this.userName = this.dataService.getUsername()!;
    this.dataService.userName.subscribe((newUser: any) => {
      this.userName = newUser;
      console.log('app componenet ma username ', this.userName);
    });
  }

  OnLogOutClick() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.dataService.userNav.next(this.dataService.getLoggedIn());
    this.router.navigate(['/login']);
  }
}
