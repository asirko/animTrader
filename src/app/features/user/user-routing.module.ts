import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAnimsComponent } from './my-anims/my-anims.component';

const routes: Routes = [
  {
    path: 'my-anims',
    component: MyAnimsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
