import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author, JsonData, profile } from 'src/data';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css'],
})
export class AuthorDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private dataService: DataServiceService,
    private router: Router
  ) {}

  userVal = '';
  author?: Author;
  articles?: JsonData[];

  ngOnInit(): void {
    this.route.paramMap.subscribe((x) => {
      this.userVal = x.get('username')!;

      if (this.userVal === localStorage.getItem('userName')?.slice(1, -1)) {
        this.router.navigate(['/user/', this.userVal]);
      }

      this.dataService
        .getAuthorByUsername(this.userVal)
        .subscribe((data: Author) => (this.author = data));

      this.dataService
        .getArticleByUsername(this.userVal)
        .subscribe((data: JsonData[]) => (this.articles = data));
    });
  }

  onFollowClick() {
    if (this.dataService.getLoggedIn()) {
      if (!this.author!.following) {
        this.dataService
          .followUser(this.userVal!)
          .subscribe((data: profile) => {
            this.author!.following = data.following;
          });
      } else if (this.author!.following) {
        this.dataService
          .unfollowUser(this.userVal!)
          .subscribe((data: profile) => {
            this.author!.following = data.following;
          });
      }
    } else {
      this.router.navigate(['/login']);
    }
  }
}
