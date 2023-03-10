import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent} from "./default.component";
import {CarComponent} from "../../modules/car/car.component";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "../../shared/material.module";
import { CarDetailComponent } from 'src/app/modules/car/car-detail/car-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RentComponent } from 'src/app/modules/rent/rent.component';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { RegisterComponent } from 'src/app/modules/register/register.component';
import { ProfileComponent } from 'src/app/modules/profile/profile.component';


@NgModule({
  declarations: [
    DefaultComponent,
    CarComponent,
    CarDetailComponent,
    RentComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class DefaultModule { }
