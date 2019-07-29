import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './authorized/settings/public-layout/public-layout.components';
import { FormComponent } from './shared/components/form/form.component';
import {UserListModule} from './authorized/settings/user/list/user-list.module';

const routes: Routes = [

  // {
  //   path: '',
  //   component: FormComponent,
  // },
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './authorized/settings/user/list/user-list.module#UserListModule',
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
