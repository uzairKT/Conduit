import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonData, profile } from 'src/data';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private dataService: DataServiceService,
    private router: Router
  ) {}

  slagVal = '';
  article?: JsonData;
  username?: string;
  follow?: boolean;
  favourite?: boolean;
  swapOptions?: boolean;

  ngOnInit(): void {
    this.route.paramMap.subscribe((x) => {
      console.log(x.get('slag'));
      this.slagVal = x.get('slag')!;
      // this.article = this.dataService.getItemBySlag(this.slagVal);
      this.dataService
        .getItemBySlag(this.slagVal)
        .subscribe((data: JsonData) => {
          if (
            data.author.username ===
            localStorage.getItem('userName')?.slice(1, -1)
          ) {
            this.swapOptions = true;
          }
          this.article = data;
          this.username = this.article.author.username;
          this.favourite = this.article.favorited;
          console.log('favourite value ==>', this.article.favorited);
          console.log('follow value ==>', this.article.author.following);
          console.log(this.article);
        });
    });
  }

  onFavouriteClick() {
    if (this.dataService.getLoggedIn()) {
      if (!this.article?.favorited) {
        console.log('slag value ==>', this.slagVal);
        this.dataService
          .favouriteArticle(this.slagVal!)
          .subscribe((data: JsonData) => {
            this.article!.favorited = data.favorited;
            this.article!.favoritesCount = data.favoritesCount;
          });
      } else if (this.article?.favorited) {
        console.log('slag value ==>', this.slagVal);
        this.dataService
          .unfavouriteArticle(this.slagVal!)
          .subscribe((data: JsonData) => {
            this.article!.favorited = data.favorited;
            this.article!.favoritesCount = data.favoritesCount;
          });
      }
    } else {
      this.router.navigate(['/login']);
    }
  }

  onFollowClick() {
    if (this.dataService.getLoggedIn()) {
      if (!this.article?.author.following) {
        console.log('username value ==>', this.username);
        this.dataService
          .followUser(this.username!)
          .subscribe((data: profile) => {
            this.article!.author.following = data.following;
          });
      } else if (this.article?.author.following) {
        console.log('username value ==>', this.username);
        this.dataService
          .unfollowUser(this.username!)
          .subscribe((data: profile) => {
            this.article!.author.following = data.following;
          });
      }
    } else {
      this.router.navigate(['/login']);
    }
  }
  onEditClick() {}

  onDeleteClick() {
    console.log('slag value ==>', this.slagVal);
    this.dataService.deleteArticle(this.slagVal!);
    this.router.navigate(['']);
  }
}
