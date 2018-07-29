import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { UserHomeComponent } from './user-home/user-home.component';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [UserHomeComponent]
})
export class UserModule { }
