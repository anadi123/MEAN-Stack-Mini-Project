
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import { ArticleDetailsComponent } from './../articles/article-details/article-details.component'
const routes: Routes = [
  {path:'about-us', component:AboutUsComponent},
  {path:'contact-us',component:ContactUsComponent},
  { path: 'article/1', component: ArticleDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticpagesRoutingModule { }
