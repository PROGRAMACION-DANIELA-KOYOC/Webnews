import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/api/usuarios';
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

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl, this.options);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/' + id, this.options);
  }

  createUser(myUser: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, myUser, this.options);
  }

  updateUser(id: number, myUser: User): Observable<User> {
    return this.http.put<User>(this.apiUrl + '/' + id, myUser, this.optionsForUpdateDelete);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(this.apiUrl + '/' + id, this.optionsForUpdateDelete);
  }


}