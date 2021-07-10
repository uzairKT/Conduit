import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    this.http.get<T>(environment.apiUrl + path).subscribe((data) => {
      sub.next(data);
    }, this.errorHandler(sub));
    return sub;
  }
}
