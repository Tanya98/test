import {Injectable} from '@angular/core';
import {UserCreateInterface} from "../../../domaim/user/create/user-create.interface";
import {HttpClient} from "@angular/common/http";
import {ApiResponse} from "../../../infrastructure/api-models/api.response";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable()
export class HttpService {

  public apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public get<TResponse extends ApiResponse<any>>(url: string): Observable<any> {
    let requestUrl = this.getUrl(url);
    return this.http.get<TResponse>(requestUrl);
  }

  public post<TResponse extends ApiResponse<any>>(url: string, request?: any): Observable<any> {
    let requestUrl = this.getUrl(url);
    return this.http.post<TResponse>(requestUrl, request);
  }

  public put<TResponse extends ApiResponse<any>>(url: string, request?: any): Observable<any> {
    let requestUrl = this.getUrl(url);
    return this.http.put<TResponse>(requestUrl, request);
  }

  public delete<TResponse extends ApiResponse<any>>(url: string): Observable<any> {
    let requestUrl = this.getUrl(url);
    return this.http.delete<TResponse>(requestUrl);
  }

  private getUrl(url: string): string {
    return `${this.apiUrl}/${url}`;
  }
}
