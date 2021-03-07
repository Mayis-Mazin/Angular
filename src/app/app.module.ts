import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import {UserService} from './user.service'
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SidebarModule} from 'ng-sidebar';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UpcomingPatientsComponent } from './upcoming-patients/upcoming-patients.component';
import { LabResultsComponent } from './lab-results/lab-results.component';
import { FollowUpsComponent } from './follow-ups/follow-ups.component';
import { MessagesComponent } from './messages/messages.component'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsComponent,
    UserDetailsComponent,
    SideBarComponent,
    UpcomingPatientsComponent,
    LabResultsComponent,
    FollowUpsComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SidebarModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
