import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author, JsonData } from 'src/data';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  constructor(
    private dataService: DataServiceService,
    private route: ActivatedRoute
  ) {}

  userVal = '';
  author?: Author;
  articles?: JsonData[];
  favArticles?: JsonData[];
  myArticle = true;
  FavArticle = false;

  ngOnInit(): void {
    this.route.paramMap.subscribe((x) => {
      this.userVal = x.get('username')!;

      this.dataService
        .getAuthorByUsername(this.userVal)
        .subscribe((data: Author) => (this.author = data));

      this.dataService
        .getArticleByUsername(this.userVal)
        .subscribe((data: JsonData[]) => (this.articles = data));

      this.dataService
        .getFavouritedArticle(this.userVal)
        .subscribe((data: JsonData[]) => (this.favArticles = data));
    });
  }

  onMyArticle() {
    this.FavArticle = false;
    this.myArticle = true;
  }

  onFavArticle() {
    this.FavArticle = true;
    this.myArticle = false;
  }
}
