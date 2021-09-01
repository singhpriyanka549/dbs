import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public postUser(data: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data, httpOptions);
  }
  public getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts', httpOptions);
  }
  public getUser(id: any) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id, httpOptions);
  }
  public updateUser(data: any, id: any) {
    return this.http.put('https://jsonplaceholder.typicode.com/posts/' + id, data, httpOptions);
  }

}
