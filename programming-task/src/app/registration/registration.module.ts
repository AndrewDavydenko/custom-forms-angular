import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldService } from '../services/field.service';
import { RegistrationRouterModule } from './registration-router.module';
import { RegistrationComponent } from './registration.component';
import { MyFormSubComponent } from './form/form.component';


@NgModule({
  declarations: [RegistrationComponent, MyFormSubComponent],
  imports: [
    CommonModule,
    RegistrationRouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FieldService],
})
export class RegistrationModule { }
