import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameformComponent } from './gameform/gameform.component';

const routes: Routes = [
    { path:'', component: HomeComponent},
    { path:'addgame', component:GameformComponent}
];


 @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
 })
 export class AppRoutingModule { }
 export const routingComponents = [HomeComponent,GameformComponent]