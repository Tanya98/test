import { Observable } from "rxjs";

export interface ApiGetListService<TGetListRequest, TGetListResponse> {

  getList(request: TGetListRequest): Observable<TGetListResponse>;
}
