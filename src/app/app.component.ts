import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
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

  constructor(private dataService: DataServiceService) {}

  user = false;

  ngOnInit(): void {
    this.user = this.dataService.getLoggedIn();
    console.log(this.user);
    this.dataService.userNav.subscribe((newUSer: any) => {
      console.log('subsrivber', newUSer);
      this.user = newUSer;
    });
  }

  OnLogOutClick() {
    console.log('user is ' + this.dataService.getLoggedIn());
    this.dataService.setLoggedIn(!this.dataService.getLoggedIn());
    console.log('user is ' + this.dataService.getLoggedIn());

    this.dataService.userNav.next(this.dataService.getLoggedIn());
  }
}
