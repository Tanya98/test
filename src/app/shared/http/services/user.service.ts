import { Injectable } from '@angular/core';
import { UserListResponse } from 'src/app/domaim/user/list/user-list.response';
import { ApiGetListService } from 'src/app/infrastructure/api-services/api-list.service';
import { UserDetailsResponse } from 'src/app/domaim/user/details/user-details.response';
import { ApiGetDetailsService } from 'src/app/infrastructure/api-services/api-details.service';
import { ApiCreareService } from 'src/app/infrastructure/api-services/api-creare.service';
import { UserCreateResponse } from 'src/app/domaim/user/create/user-create.response';
import { ApiDeleteService } from 'src/app/infrastructure/api-services/api-delete.service';
import { UserDeleteResponse } from 'src/app/domaim/user/delete/user-delete.response';
import { HttpService } from './http.service';
import { UserListRequest } from 'src/app/domaim/user/list/user-list.request';
import { Observable } from 'rxjs';
import { ListResponse } from 'src/app/domaim/user/list/list.response';
import { NavigationRoutes } from '../../constans/navigation-routes.constans';
import { UserCreateModel } from 'src/app/domaim/user/create/user-create.model';
import { UserEditResponse } from 'src/app/domaim/user/edit/user-edit.response';

@Injectable()
export class UserService
// ApiGetListService<UserListResponse>,
// ApiGetDetailsService<UserDetailsResponse>,
// ApiCreareService<UserCreateResponse>,
// ApiDeleteService<UserDeleteResponse>,
{

  constructor(private http: HttpService) {
  }
  public getList(): Observable<UserListResponse> {
    return this.http.get<UserListResponse>(NavigationRoutes.User.List());
  }

  public getDetails(entityId: number): Observable<UserDetailsResponse> {
    return this.http.get<UserDetailsResponse>(NavigationRoutes.User.Details(entityId));
  }

  public createUser(user: UserCreateModel): Observable<UserCreateResponse> {
    return this.http.post<UserCreateResponse>(NavigationRoutes.User.Create(user));
  }

  public updateUser(entityId: number): Observable<UserEditResponse> {
    return this.http.put<UserEditResponse>(NavigationRoutes.User.Edit(entityId));
  }
  public deleteUser(entityId: number): Observable<UserDeleteResponse> {
    return this.http.delete<UserDeleteResponse>(NavigationRoutes.User.Delete(entityId));
  }
}
