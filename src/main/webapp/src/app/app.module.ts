import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {HttpClientModule} from '@angular/common/http';
import { CustomerViewComponent } from './view/customer-view/customer-view.component';
import {MatListModule} from '@angular/material';
import {ViewComponent} from './view/view.component';
import { RideViewComponent } from './view/ride-view/ride-view.component';
import { ProfileViewComponent } from './view/profile-view/profile-view.component';
import { SettingsViewComponent } from './view/settings-view/settings-view.component';
import { FootprintViewComponent } from './view/footprint-view/footprint-view.component';
import { SocialViewComponent } from './view/social-view/social-view.component';
import { MessageViewComponent } from './view/message-view/message-view.component';

const ENTRYCOMPNENTS = [
  CustomerViewComponent,
  RideViewComponent,
  ProfileViewComponent,
  SettingsViewComponent,
  FootprintViewComponent,
  SocialViewComponent,
  MessageViewComponent
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerViewComponent,
    ViewComponent,
    ...ENTRYCOMPNENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FontAwesomeModule,
    FontAwesomeModule,
    HttpClientModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [...ENTRYCOMPNENTS]
})
export class AppModule {}
