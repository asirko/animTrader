import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimComponent } from './components/anim/anim.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MiniatureComponent } from './components/miniature/miniature.component';
import { VerticalExtremumSliderComponent } from './components/vertical-extremum-slider/vertical-extremum-slider.component';

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
    VerticalExtremumSliderComponent,
  ],
  declarations: [
    AnimComponent,
    MiniatureComponent,
    VerticalExtremumSliderComponent,
  ]
})
export class SharedModule { }
