import {Observable} from "rxjs";

export interface ApiCreateService<TCreateRequest,TCreateResponse> {

  create(request: TCreateRequest):Observable<TCreateResponse>;
}
