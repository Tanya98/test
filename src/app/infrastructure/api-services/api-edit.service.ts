import {Observable} from "rxjs";

export interface ApiEditService<TEditRequest,TEditResponse> {

  edit(request: TEditRequest):Observable<TEditResponse>;
}
