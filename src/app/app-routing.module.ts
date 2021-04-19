import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AchievementsComponent } from './achievements/achievements.component';
import { CampsComponent } from './camps/camps.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { SlotspageComponent } from './slotspage/slotspage.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'slotspage',component:SlotspageComponent},
  {path:'specialists',component:SlotspageComponent},
  {path:'location',component:LocationComponent},
  {path:'camps',component:CampsComponent},
  {path:'achievements',component:AchievementsComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
