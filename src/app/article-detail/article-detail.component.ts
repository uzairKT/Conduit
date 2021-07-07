import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonData } from 'src/data';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private dataService: DataServiceService
  ) {}

  slagVal = '';
  article?: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((x) => {
      console.log(x.get('slag'));
      this.slagVal = x.get('slag')!;
      this.article = this.dataService.getItemBySlag(this.slagVal);
    });
  }
}
