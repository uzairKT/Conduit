import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
})
export class NewArticleComponent implements OnInit {
  constructor(
    private dataService: DataServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  errorsForUser: string[] = [];

  articleForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
    tagList: new FormControl('', [Validators.required]),
  });

  get title() {
    return this.articleForm.get('title')!;
  }
  get description() {
    return this.articleForm.get('description')!;
  }
  get body() {
    return this.articleForm.get('body')!;
  }
  get tagList() {
    return this.articleForm.get('tagList')!;
  }

  OnPublishClick() {
    // console.log('user is ' + this.dataService.getLoggedIn());
    // this.dataService.setLoggedIn(!this.dataService.getLoggedIn());

    // console.log('user is ' + this.dataService.getLoggedIn());

    this.errorsForUser.length = 0;
    const valueForService = this.articleForm.value;
    this.dataService.createArticle(valueForService).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        if (err instanceof HttpErrorResponse && err.status === 422) {
          Object.keys(err.error.errors).forEach((k) => {
            err.error.errors[k].forEach((e: string) => {
              this.errorsForUser.push(k + ' ' + e);
            });
          });
        } else {
          alert('server is not OK..');
        }
      }
    );
  }
}
