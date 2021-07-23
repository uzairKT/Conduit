import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonData } from 'src/data';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  constructor(
    private dataService: DataServiceService,
    private router: Router
  ) {}

  @Input() article?: JsonData;
  slagVal = '';

  ngOnInit(): void {
    this.slagVal = this.article!.slug;
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
}
