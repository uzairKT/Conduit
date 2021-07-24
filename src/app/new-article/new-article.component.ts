import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonData } from 'src/data';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
})
export class NewArticleComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private dataService: DataServiceService,
    private router: Router
  ) {}

  slagVal = '';
  article?: JsonData;
  updateFlag = false;

  ngOnInit(): void {
    this.route.paramMap.subscribe((x: any) => {
      this.slagVal = x.get('slag')!;

      if (this.slagVal) {
        this.dataService.getItemBySlag(this.slagVal).subscribe((data) => {
          this.article = data;
          console.log(this.article);
          this.articleForm.patchValue(this.article);
        });
      }
    });
  }

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
    if (this.slagVal) {
      this.errorsForUser.length = 0;
      const valueForService = this.articleForm.value;
      this.dataService.updateArticle(valueForService, this.slagVal).subscribe(
        (data) => {
          this.router.navigate([`article/${this.slagVal}`]);
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
    } else {
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
}
