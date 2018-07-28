import { NgModule } from '@angular/core';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { MiniatureComponent } from './miniature/miniature.component';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CatalogRoutingModule
  ],
  declarations: [CatalogComponent, MiniatureComponent, DetailComponent]
})
export class CatalogModule { }
