import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategroyService {

  private apiUrl = 'http://localhost:3000/api/categorias';
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

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(this.apiUrl + '/' + id);
  }

  createCategory(myCategory: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, myCategory, this.options);
  }

  updateCategory(id: number, myCategory: Category): Observable<Category> {
    return this.http.put<Category>(this.apiUrl + '/' + id, myCategory, this.optionsForUpdateDelete);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(this.apiUrl + '/' + id, this.optionsForUpdateDelete);
  }


}