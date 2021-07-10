import { Component, OnInit } from '@angular/core';
import { JsonData } from 'src/data';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private dataService: DataServiceService) {}

  articleJson?: Array<JsonData>;
  tagList?: Array<string>;

  ngOnInit(): void {
    this.dataService
      .getArticleListApi()
      .subscribe((data: JsonData[]) => (this.articleJson = data));
    this.dataService.getTagListApi().subscribe((data) => (this.tagList = data));
  }

  // articleJson2: Array<JsonData> = this.dataService.getArticleList();

  // tagList: Array<string> = this.dataService.getTagList();
}
