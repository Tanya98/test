import {NgModule} from '@angular/core';
import {UserListComponent} from "./user-list.component";
import {CommonModule} from "@angular/common";
import {userslistModuleRoutes} from "./user-list.routing";
// import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    userslistModuleRoutes,
  ],
  exports: [UserListComponent],
  declarations: [UserListComponent],
  providers: [],
})
export class UserListModule {
}
