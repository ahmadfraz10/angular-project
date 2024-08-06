import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = "https://api.github.com";
  username = "";
  clientId = "Iv23liS0jl1rzGVmdRwh";
  clientSecret = "d1a34fdeafffec98cc20cef01879fa42d0a48373";

  private apiUrl: string;
  private apiRepos: string;
  
  page=0;
  since=0;  //page
  per_page=12 //per page records.
//   private apiUserList: string = `${this.baseUrl}/users?since=${this.since}&per_page=${this.per_page}`;
    private apiUserList: string = ``;

  constructor(private http: HttpClient) {
    this.updateProfile(this.username);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProfileRepos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiRepos);
  }

  getUserList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUserList);
  }

  getListUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUserList);
  }


  updateProfile(username: string): void {
    this.username = username;
    this.apiUrl = `${this.baseUrl}/users/${this.username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`;
    this.apiRepos = `${this.baseUrl}/users/${this.username}/repos?client_id=${this.clientId}&client_secret=${this.clientSecret}`;
  }

  updatePaginationData(since: number): void {
    this.page = since;
    // this.apiUserList = `${this.baseUrl}/users?since=${this.page}&per_page=${this.per_page}`;
    this.apiUserList = `${this.baseUrl}/search/users?q=${this.username}&page=${this.page}&per_page=${this.per_page}&client_id=${this.clientId}&client_secret=${this.clientSecret}`
    // this.getListUsers();

  }

  updateSearchRequest(username: string): void {
    this.username = username;
    this.apiUserList = `${this.baseUrl}/search/users?q=${this.username}&page=${this.page}&per_page=${this.per_page}&client_id=${this.clientId}&client_secret=${this.clientSecret}`
    // this.apiUserList = `${this.baseUrl}/search/users?q=${username}`

  }
}
