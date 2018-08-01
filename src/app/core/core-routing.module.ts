import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/catalog',
      },
      {
        path: 'catalog',
        loadChildren: 'src/app/features/catalog/catalog.module#CatalogModule',
      },
      {
        path: 'user',
        loadChildren: 'src/app/features/user/user.module#UserModule',
        canActivate: [ AuthGuard ],
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
