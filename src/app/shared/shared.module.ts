import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimComponent } from './anim/anim.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    AnimComponent,
  ],
  declarations: [
    AnimComponent,
  ]
})
export class SharedModule { }
