import { NgModule } from '@angular/core';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CatalogRoutingModule
  ],
  declarations: [
    CatalogComponent,
    DetailComponent
  ]
})
export class CatalogModule { }
