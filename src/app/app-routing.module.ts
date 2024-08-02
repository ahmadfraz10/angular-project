import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { UsersComponent } from './mycomponents/users/users.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'post', component: SinglePostComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'term-conditions', component: TermsAndConditionsComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'users', component: UsersComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
