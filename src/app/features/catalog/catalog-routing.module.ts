import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: 'test',
    component: DetailComponent,
    data: { isTest: true }
  }, {
    path: '',
    component: CatalogComponent,
    children: [
      {
        path: '',
        component: null,
      }, {
        path: ':id',
        component: DetailComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
