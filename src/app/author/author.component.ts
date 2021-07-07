import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/data';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor() { }

  @Input() author? :Author;

  ngOnInit(): void {
  }

}
