import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MyAnimsComponent } from './my-anims/my-anims.component';
import { AnimListComponent } from './my-anims/anim-list/anim-list.component';
import { NewAnimComponent } from './my-anims/new-anim/new-anim.component';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
    MyAnimsComponent,
    NewAnimComponent,
    AnimListComponent
  ]
})
export class UserModule { }
