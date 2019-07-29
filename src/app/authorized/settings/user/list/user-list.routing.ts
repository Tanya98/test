import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./user-list.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { path: 'users', component: UserListComponent }
];

export const userslistModuleRoutes: ModuleWithProviders = RouterModule.forChild(routes);
