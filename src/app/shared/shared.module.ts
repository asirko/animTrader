import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimComponent } from './components/anim/anim.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MiniatureComponent} from './components/miniature/miniature.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    AnimComponent,
    MiniatureComponent,
  ],
  declarations: [
    AnimComponent,
    MiniatureComponent,
  ]
})
export class SharedModule { }
