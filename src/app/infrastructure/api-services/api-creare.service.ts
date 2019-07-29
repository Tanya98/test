import {Observable} from "rxjs";

export interface ApiCreareService<TCreateRequest,TCreateResponse> {

  create(request: TCreateRequest):Observable<TCreateResponse>;
}
