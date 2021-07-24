import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  article,
  articleResponse,
  Author,
  JsonData,
  profile,
  profileResponse,
  user,
  userResponse,
} from 'src/data';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor(private api: ApiService, private http: HttpClient) {}

  JsonArticle?: Array<JsonData>;

  deleteArticle(slag: string) {
    const sub = new Subject<JsonData>();
    this.api.delete<articleResponse>(`/articles/${slag}`).subscribe(
      (data) => {
        sub.next(data.article);
      },
      (e) => sub.error(e)
    );

    return sub;
  }

  createArticle(data: {
    title: string;
    description: string;
    body: string;
    tagList: string[];
  }) {
    const sub = new Subject<JsonData>();
    this.api.post<articleResponse>('/articles', { article: data }).subscribe(
      (data) => {
        sub.next(data.article);
      },
      (e) => sub.error(e)
    );
    return sub;
  }

  updateArticle(
    data: {
      title: string;
      description: string;
      body: string;
      tagList: string[];
    },
    slag: string
  ) {
    const sub = new Subject<JsonData>();
    this.api
      .put<articleResponse>(`/articles/${slag}`, { article: data })
      .subscribe(
        (data) => {
          sub.next(data.article);
        },
        (e) => sub.error(e)
      );

    return sub;
  }

  favouriteArticle(slag: string) {
    const sub = new Subject<JsonData>();
    this.api.post<articleResponse>(`/articles/${slag}/favorite`, '').subscribe(
      (data) => {
        sub.next(data.article);
      },
      (e) => sub.error(e)
    );

    return sub;
  }

  unfavouriteArticle(slag: string) {
    const sub = new Subject<JsonData>();
    this.api.delete<articleResponse>(`/articles/${slag}/favorite`).subscribe(
      (data) => {
        sub.next(data.article);
      },
      (e) => sub.error(e)
    );

    return sub;
  }

  followUser(username: string) {
    const sub = new Subject<profile>();
    this.api
      .post<profileResponse>(`/profiles/${username}/follow`, '')
      .subscribe(
        (data) => {
          sub.next(data.profile);
        },
        (e) => sub.error(e)
      );

    return sub;
  }

  unfollowUser(username: string) {
    const sub = new Subject<profile>();
    this.api.delete<profileResponse>(`/profiles/${username}/follow`).subscribe(
      (data) => {
        sub.next(data.profile);
      },
      (e) => sub.error(e)
    );

    return sub;
  }

  getYourFeed(): Observable<JsonData[]> {
    const sub = new Subject<JsonData[]>();
    this.api
      .get<{ articles: JsonData[] }>('/articles/feed')
      .subscribe((data) => {
        sub.next(data.articles);
      }, this.api.errorHandler(sub));

    return sub;
  }

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

  getFavouritedArticle(username: string): Observable<JsonData[]> {
    const sub = new Subject<JsonData[]>();
    this.api
      .get<{ articles: JsonData[] }>('/articles/?favorited=' + username)
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
    return sub;
  }

  getItemBySlag(slag: string): Observable<JsonData> {
    const sub = new Subject<JsonData>();
    this.api
      .get<{ article: JsonData }>('/articles/' + slag)
      .subscribe((data) => {
        sub.next(data.article);
      }, this.api.errorHandler(sub));
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
  getUsername() {
    return localStorage.getItem('userName')?.slice(1, -1);
  }
  getLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  _tagValue = new Subject();

  setSearchValue(tag?: string) {
    this._tagValue.next(tag);
  }
}
