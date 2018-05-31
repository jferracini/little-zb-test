import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppContentComponent } from './app-content/app-content.component';
import { AppDescriptionComponent } from './app-description/app-description.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppWidgetDonationComponent } from './app-widget-donation/app-widget-donation.component';
@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppContentComponent,
    AppDescriptionComponent,
    AppFooterComponent,
    AppWidgetDonationComponent
  ],
  exports: [ AppWidgetDonationComponent ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgbModule.forRoot()
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
