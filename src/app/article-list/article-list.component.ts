import { Component, Input, OnInit } from '@angular/core';
import { JsonData } from 'src/data';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  
  constructor() { 
    
  }

  @Input() articleList?: Array<JsonData>  ;

  ngOnInit(): void {
  }

}
