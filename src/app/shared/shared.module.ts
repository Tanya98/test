import {NgModule} from '@angular/core';
import {FormComponent} from "./components/form/form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormComponent
  ],
  declarations: [
    FormComponent,
  ],
  providers: [],
})
export class SharedModule {
}
