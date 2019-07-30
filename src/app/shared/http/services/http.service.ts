import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ApiResponse } from "../../../infrastructure/api-models/api.response";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { UserCreateModel } from 'src/app/domaim/user/create/user-create.model';
import { UserListRequest } from 'src/app/domaim/user/list/user-list.request';

@Injectable()
export class HttpService {

  public apiUrl = environment.apiUrl;
  public headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) {
  }

  public get<TResponse extends ApiResponse<any>>(url: string, options: any): Observable<any> {
    let requestUrl = this.getUrl(url);
    // options = this.httpOptions;
    return this.http.get<TResponse>(requestUrl, options);
  }

  public post<TResponse extends ApiResponse<any>>(url: string, request?: any, options?: any): Observable<any> {
    let requestUrl = this.getUrl(url);
    // options = this.httpOptions;
    return this.http.post<TResponse>(requestUrl, request, options);
  }

  public put<TResponse extends ApiResponse<any>>(url: string, request?: UserListRequest, options?: any): Observable<any> {
    let requestUrl = this.getUrl(url);
    // options = this.httpOptions;
    return this.http.put<TResponse>(requestUrl, request, options);
  }

  public delete<TResponse extends ApiResponse<any>>(url: string, request?: any, options?: any): Observable<any> {
    let requestUrl = this.getUrl(url);
    // options = this.httpOptions;
    return this.http.delete<TResponse>(requestUrl, options);
  }

  private getUrl(url: string): string {
    return `${this.apiUrl}/${url}`;
  }
}
