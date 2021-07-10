import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonData } from 'src/data';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-tag-search',
  templateUrl: './tag-search.component.html',
  styleUrls: ['./tag-search.component.css'],
})
export class TagSearchComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private dataService: DataServiceService
  ) {}

  tagVal = '';
  articleJson?: JsonData[];
  tagList?: Array<string>;

  ngOnInit(): void {
    this.route.paramMap.subscribe((x) => {
      console.log(x.get('tag'));
      this.tagVal = x.get('tag')!;
      this.dataService
        .getTagListApi()
        .subscribe((data) => (this.tagList = data));
      this.dataService.getArticlesByTag(this.tagVal)
        .subscribe((data: JsonData[]) => (this.articleJson = data));
      // this.articleJson = this.dataService.getItemByTag(this.tagVal);
    });
  }

  // articleJson: Array<JsonData> = this.dataService.getArticleList();
}
