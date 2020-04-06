import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MessageComponent} from './page/message/message.component';
import {LoginComponent} from './page/login/login.component';
import {LoginGuard} from './guard/login.guard';
import {HomeComponent} from './page/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [LoginGuard]},
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
