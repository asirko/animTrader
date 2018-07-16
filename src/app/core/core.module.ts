import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
  ],
  exports: [
    CoreRoutingModule,
  ],
  declarations: [
    LayoutComponent,
  ]
})
export class CoreModule { }
