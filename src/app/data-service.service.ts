import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Author, JsonData, user, userResponse } from 'src/data';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor(private api: ApiService) {}

  JsonArticle?: Array<JsonData>;

  signupUser(data: { username: string; emial: string; password: string }) {
    const sub = new Subject<user>();
    this.api.post<userResponse>('/users', { user: data }).subscribe(
      (data) => {
        sub.next(data.user);
      },
      (e) => sub.error(e)
    );
    return sub;
  }

  loginUser(data: { emial: string; password: string }) {
    const sub = new Subject<user>();
    this.api.post<userResponse>('/users/login', { user: data }).subscribe(
      (data) => {
        sub.next(data.user);
      },
      (e) => sub.error(e)
    );
    return sub;
  }

  getArticlesByTag(tag: string): Observable<JsonData[]> {
    const sub = new Subject<JsonData[]>();
    this.api
      .get<{ articles: JsonData[] }>('/articles/?tag=' + tag)
      .subscribe((data) => {
        sub.next(data.articles);
      }, this.api.errorHandler(sub));

    return sub;
  }

  getArticleByUsername(username: string): Observable<JsonData[]> {
    const sub = new Subject<JsonData[]>();
    this.api
      .get<{ articles: JsonData[] }>('/articles/?author=' + username)
      .subscribe((data) => {
        sub.next(data.articles);
      }, this.api.errorHandler(sub));

    return sub;
  }

  getAuthorByUsername(username: string): Observable<Author> {
    const sub = new Subject<Author>();
    this.api
      .get<{ profile: Author }>('/profiles/' + username)
      .subscribe((data) => {
        sub.next(data.profile);
      }, this.api.errorHandler(sub));
    console.log('by username ', sub);
    return sub;
  }

  getItemBySlag(slag: string): Observable<JsonData> {
    const sub = new Subject<JsonData>();
    this.api
      .get<{ article: JsonData }>('/articles/' + slag)
      .subscribe((data) => {
        sub.next(data.article);
      }, this.api.errorHandler(sub));
    console.log('by slag ', sub);
    return sub;
  }

  getArticleListApi(): Observable<JsonData[]> {
    const sub = new Subject<JsonData[]>();
    this.api.get<{ articles: JsonData[] }>('/articles').subscribe((data) => {
      sub.next(data.articles);
    }, this.api.errorHandler(sub));

    return sub;
  }

  getTagListApi(): Observable<string[]> {
    const sub = new Subject<string[]>();
    this.api.get<{ tags: string[] }>('/tags').subscribe((data) => {
      sub.next(data.tags);
    }, this.api.errorHandler(sub));

    return sub;
  }

  private LoggedIn: boolean = false;

  userNav = new Subject();
  userName = new Subject();

  setLoggedIn(token?: string, name?: string) {
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('userName', JSON.stringify(name));
    this.userNav.next(this.getLoggedIn());
    this.userName.next(this.getUsername());
  }

  // getLoggedIn1 = () => JSON.parse(localStorage.getItem('token')!) as boolean;
  getUsername() {
    return localStorage.getItem('userName')?.slice(1, -1);
  }
  getLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
