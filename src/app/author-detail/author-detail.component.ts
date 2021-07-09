import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css'],
})
export class AuthorDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private dataService: DataServiceService
  ) {}

  userVal = '';
  author?: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((x) => {
      console.log(x.get('username'));
      this.userVal = x.get('username')!;
      this.author = this.dataService.getAuthorByUsername(this.userVal);
    });
  }
}
