import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { DesignComponent } from './design/design.component';
import { SnippetsComponent } from './snippets/snippets.component';
import { PhotographyComponent } from './photography/photography.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'about', component: AboutComponent},
  { path: 'uiux', component: DesignComponent},
  { path: 'backend', component: SnippetsComponent},
  { path: 'photos', component: PhotographyComponent},
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
