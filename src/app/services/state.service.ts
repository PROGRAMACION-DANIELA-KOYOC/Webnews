import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { State } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private apiUrl = 'http://localhost:3000/api/estados';
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

  getStates(): Observable<State[]> {
    return this.http.get<State[]>(this.apiUrl, this.options);
  }

  getState(id: number): Observable<State> {
    return this.http.get<State>(this.apiUrl + '/' + id, this.options);
  }

  createState(myState: State): Observable<State> {
    return this.http.post<State>(this.apiUrl, myState, this.options);
  }

  updateState(id: number, myState: State): Observable<State> {
    return this.http.put<State>(this.apiUrl + '/' + id, myState, this.optionsForUpdateDelete);
  }

  deleteState(id: number): Observable<State> {
    return this.http.delete<State>(this.apiUrl + '/' + id, this.optionsForUpdateDelete);
  }


}