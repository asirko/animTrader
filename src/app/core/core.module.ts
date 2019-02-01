import {NgModule} from '@angular/core';

import {CoreRoutingModule} from './core-routing.module';
import {LayoutComponent} from './layout/layout.component';
import {SharedModule} from '../shared/shared.module';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {environment} from '../../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {LoginComponent} from './login/login.component';

@NgModule({
  imports: [
    SharedModule,
    CoreRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  exports: [
    CoreRoutingModule,
  ],
  declarations: [
    LayoutComponent,
    LoginComponent,
  ]
})
export class CoreModule { }
