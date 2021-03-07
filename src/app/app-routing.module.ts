import { MessagesComponent } from './messages/messages.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardComponent} from './card/card.component';
import {FollowUpsComponent} from './follow-ups/follow-ups.component';
import {LabResultsComponent}from './lab-results/lab-results.component';
import{SideBarComponent} from './side-bar/side-bar.component';
import {UpcomingPatientsComponent} from './upcoming-patients/upcoming-patients.component'

const routes: Routes = [
  {path:'',
  component:CardComponent
},{
  path:'user/:id',
component:UserDetailsComponent
},
{
  path:'upcomingpatients',
  component:UpcomingPatientsComponent
},{
  path:'labresults',
  component:LabResultsComponent  
},{
  path:'followups',
  component:FollowUpsComponent
},{
  path:'message',
  component:MessagesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
