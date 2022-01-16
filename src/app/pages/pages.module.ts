import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { PagesRountingModule } from './pages-rounting.module';
import { SharedModule } from '../shared/shared.module';
import { SuccesComponent } from './succes/succes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    CreateAccountComponent,
    SuccesComponent
  ],
  imports: [
    CommonModule,
    PagesRountingModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
