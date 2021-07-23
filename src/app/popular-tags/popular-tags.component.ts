import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { JsonData } from 'src/data';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.css'],
})
export class PopularTagsComponent implements OnInit {
  @Input() tagList?: Array<string>;
  @Output() tagValue = new EventEmitter<any>();
  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {}
  onTagClick(tag: string) {
    this.tagValue.emit(tag);
    this.dataService.setSearchValue(tag);
  }
}
