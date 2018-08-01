import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAnimsComponent } from './my-anims/my-anims.component';
import { AnimListComponent } from './my-anims/anim-list/anim-list.component';
import { NewAnimComponent } from './my-anims/new-anim/new-anim.component';

const routes: Routes = [
  {
    path: 'my-anims',
    component: MyAnimsComponent,
    children: [
      {
        path: '',
        component: AnimListComponent,
      },
      {
        path: 'new-anim',
        component: NewAnimComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
