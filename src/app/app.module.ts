import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginModule} from './login/login.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {RegistrationModule} from './registration/registration.module';
import {LayoutModule} from './layout/layout.module';
import {UsersModule} from './users/users.module';
import {AccountSettingsModule} from './account-settings/account-settings.module';
import {HomepageModule} from './homepage/homepage.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    LoginModule,
    DashboardModule,
    RegistrationModule,
    UsersModule,
    AccountSettingsModule,
    HomepageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
