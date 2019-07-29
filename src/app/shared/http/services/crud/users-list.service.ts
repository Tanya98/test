import {Injectable} from '@angular/core';
import {ApiGetListService} from "../../../../infrastructure/api-services/api-list.service";
import {HttpClientModule} from "@angular/common/http";


@Injectable()
export class UsersListService {

  public url = 'http://localhost:4200/api/';

  constructor(private http: HttpClientModule, ) {
  }

  get(url: string, options: any) {
    // this.httpGetList.getList(url, this.url + 'users',options,'');
  }
}
