import {Injectable} from '@angular/core';
import {UserListResponse} from 'src/app/domaim/user/list/user-list.response';
import {ApiGetListService} from 'src/app/infrastructure/api-services/api-list.service';
import {UserDetailsResponse} from 'src/app/domaim/user/details/user-details.response';
import {ApiGetDetailsService} from 'src/app/infrastructure/api-services/api-details.service';
import {UserCreateResponse} from 'src/app/domaim/user/create/user-create.response';
import {ApiDeleteService} from 'src/app/infrastructure/api-services/api-delete.service';
import {UserDeleteResponse} from 'src/app/domaim/user/delete/user-delete.response';
import {HttpService} from './http.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {NavigationRoutes} from '../../constans/navigation-routes.constans';
import {UserCreateModel} from 'src/app/domaim/user/create/user-create.model';
import {UserEditResponse} from 'src/app/domaim/user/edit/user-edit.response';
import {HttpHeaders} from "@angular/common/http";
import {ApiCreateService} from 'src/app/infrastructure/api-services/api-creare.service';

@Injectable()
export class UserService implements
  ApiGetDetailsService<UserDetailsResponse>,
  // ApiCreateService,
  ApiDeleteService {
  delete(id: number) {
    throw new Error("Method not implemented.");
  }
  public headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };
  public subject = new BehaviorSubject();

  constructor(private http: HttpService) {
  }

  public getList(): Observable<UserListResponse> {
    return this.http.get<UserListResponse>(NavigationRoutes.User.List(), this.httpOptions);
  }

  public getDetails(entityId: number): Observable<UserDetailsResponse> {
    return this.http.get<UserDetailsResponse>(NavigationRoutes.User.Details(entityId), this.httpOptions);
  }

  public createUser(user: UserCreateModel): Observable<UserCreateResponse> {
    return this.http.post<UserCreateResponse>(NavigationRoutes.User.Create(user), user, this.httpOptions);
  }

  public updateUser(user: UserCreateModel): Observable<UserEditResponse> {
    return this.http.put<UserEditResponse>(NavigationRoutes.User.Edit(user.id), this.httpOptions);
  }

  public deleteUser(entityId: number): Observable<UserDeleteResponse> {
    console.log(NavigationRoutes.User.Delete(entityId));
    return this.http.delete<UserDeleteResponse>(NavigationRoutes.User.Delete(entityId), this.httpOptions);
  }
}
