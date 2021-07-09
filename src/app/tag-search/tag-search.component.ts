import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  articleJson?: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((x) => {
      console.log(x.get('tag'));
      this.tagVal = x.get('tag')!;
      this.articleJson = this.dataService.getItemByTag(this.tagVal);
    });
  }

  // articleJson: Array<JsonData> = this.dataService.getArticleList();

  tagList: Array<string> = this.dataService.getTagList();
}
