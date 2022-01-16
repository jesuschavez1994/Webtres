import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBaarComponent } from './nav-baar/nav-baar.component';
import { MaterialModule } from './material/material.module';
import { ModalComponent } from './modal/modal.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    NavBaarComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule
  ],
  exports: [
    NavBaarComponent,
    ModalComponent
  ]
})
export class SharedModule { }
