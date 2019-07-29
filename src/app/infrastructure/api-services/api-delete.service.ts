import {Observable} from "rxjs";

export interface ApiDeleteService {
  delete(id: number): Observable<any>;
}
