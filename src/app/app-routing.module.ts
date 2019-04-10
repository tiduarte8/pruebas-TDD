import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {RegistrarseComponent} from './registrarse/registrarse.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: '', component:LoginComponent},
  { path:'registrarse', component:RegistrarseComponent},
  {path:'**',redirectTo:'/',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }