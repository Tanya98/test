import {Observable} from "rxjs";

export interface ApiGetDetailsService<TGetDetailsResponse> {

  getDetails(id: number): Observable<TGetDetailsResponse>;
}
