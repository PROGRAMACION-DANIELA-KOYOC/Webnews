import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { New } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  private apiUrl = 'http://localhost:3000/api/noticias';
  private options = {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token_web_news")
    }
  }
  private optionsForUpdateDelete = {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token_web_news")
    },
    responseType: 'text' as 'json'
  }

  constructor(private http: HttpClient) {

  }

  getNews(): Observable<New[]> {
    return this.http.get<New[]>(this.apiUrl);
  }

  getNew(id: number): Observable<New> {
    return this.http.get<New>(this.apiUrl + '/' + id);
  }

  createNew(mynew: New): Observable<New> {
    return this.http.post<New>(this.apiUrl, mynew, this.options);
  }

  updateNew(id: number, mynew: New): Observable<New> {
    return this.http.put<New>(this.apiUrl + '/' + id, mynew, this.optionsForUpdateDelete);
  }

  deleteNew(id: number): Observable<New> {
    return this.http.delete<New>(this.apiUrl + '/' + id, this.optionsForUpdateDelete);
  }


}