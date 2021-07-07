import { Component, Input, OnInit } from '@angular/core';
import { JsonData } from 'src/data';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.css']
})
export class PopularTagsComponent implements OnInit {

  @Input() tagList? :Array<string>;
  constructor() { }

  ngOnInit(): void {
  }

}
