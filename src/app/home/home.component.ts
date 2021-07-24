import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonData } from 'src/data';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private dataService: DataServiceService,
    private route: ActivatedRoute
  ) {}

  articleJson?: Array<JsonData>;
  tagList?: Array<string>;
  public global = true;
  public feed = false;
  public tag = false;
  tagVal: string = '';
  user = false;
  feedJson?: Array<JsonData>;
  tagJson?: Array<JsonData>;

  ngOnInit(): void {
    this.dataService
      .getArticleListApi()
      .subscribe((data: JsonData[]) => (this.articleJson = data));
    this.dataService.getTagListApi().subscribe((data) => (this.tagList = data));
    this.dataService
      .getYourFeed()
      .subscribe((data: JsonData[]) => (this.feedJson = data));

    this.user = this.dataService.getLoggedIn();

    this.dataService._tagValue.subscribe((data: any) => {
      this.tagVal = data;
      this.tag = true;
      this.global = false;
      this.feed = false;
      this.dataService
        .getArticlesByTag(this.tagVal)
        .subscribe((data: JsonData[]) => (this.tagJson = data));
    });
  }

  onGlobalField() {
    this.global = true;
    this.feed = false;
    this.tag = false;
  }
  onYourField() {
    this.global = false;
    this.feed = true;
    this.tag = false;
  }
  test(e: any) {
    console.log('val==>', e);
  }
}
