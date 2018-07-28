import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimComponent } from './anim/anim.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    AnimComponent,
  ],
  declarations: [
    AnimComponent,
  ]
})
export class SharedModule { }
