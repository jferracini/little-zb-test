import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

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
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
