import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  errorHandler(sub: Subject<any>) {
    return (error: any) => {
      sub.error(error);
    };
  }

  get<T>(path: string): Observable<T> {
    const sub = new Subject<T>();
    if (localStorage.getItem('token')) {
      let headers: HttpHeaders = new HttpHeaders({
        Authorization: 'Token ' + localStorage.getItem('token'),
      });
      this.http
        .get<T>(environment.apiUrl + path, { headers: headers })
        .subscribe((data) => {
          sub.next(data);
        }, this.errorHandler(sub));
    } else {
      this.http.get<T>(environment.apiUrl + path).subscribe((data) => {
        sub.next(data);
      }, this.errorHandler(sub));
    }

    return sub;
  }

  put<T>(path: string, data: any): Observable<T> {
    const sub = new Subject<T>();
    this.http.put(environment.apiUrl + path, data).subscribe((data) => {
      sub.next(data as T);
    }, this.errorHandler(sub));
    return sub;
  }

  post<T>(path: string, data: any): Observable<T> {
    const sub = new Subject<T>();
    if (localStorage.getItem('token')) {
      let headers: HttpHeaders = new HttpHeaders({
        Authorization: 'Token ' + localStorage.getItem('token'),
      });
      this.http
        .post(environment.apiUrl + path, data, { headers: headers })
        .subscribe((data) => {
          sub.next(data as T);
        }, this.errorHandler(sub));
    } else {
      this.http.post(environment.apiUrl + path, data).subscribe((data) => {
        sub.next(data as T);
      }, this.errorHandler(sub));
    }

    return sub;
  }

  // postAuth<T>(path: string, data: any): Observable<T> {
  //   const sub = new Subject<T>();
  //   let headers: HttpHeaders = new HttpHeaders({
  //     Authorization: 'Token ' + localStorage.getItem('token'),
  //   });
  //   this.http
  //     .post(environment.apiUrl + path, data, { headers: headers })
  //     .subscribe((data) => {
  //       sub.next(data as T);
  //     }, this.errorHandler(sub));
  //   return sub;
  // }

  delete<T>(path: string): Observable<T> {
    const sub = new Subject<T>();
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: 'Token ' + localStorage.getItem('token'),
    });
    this.http
      .delete(environment.apiUrl + path, { headers: headers })
      .subscribe((data) => {
        sub.next(data as T);
      }, this.errorHandler(sub));
    return sub;
  }
}
