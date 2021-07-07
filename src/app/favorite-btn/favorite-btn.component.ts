import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-btn',
  templateUrl: './favorite-btn.component.html',
  styleUrls: ['./favorite-btn.component.css']
})
export class FavoriteBtnComponent implements OnInit {
  @Input() clicked? :boolean;
  @Input() count? :number;

  favCount :number =0;
 
  constructor() { }

  ngOnInit(): void {
    this.favCount = this.count!;
  }

  onBtnClick(){
    if(this.clicked ){
      this.favCount--;
      this.clicked = false;

    }
    else{
      this.favCount++;
      this.clicked = true;
    }
  }
}
