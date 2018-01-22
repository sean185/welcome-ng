import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui';



import { AppComponent } from './app.component';
import { BasicRoutingModule } from './basic-routing.module';
import { LandingComponent } from './landing/landing.component';
import { OverlayComponent } from './overlay/overlay.component';
import { AboutComponent } from './about/about.component';
import { SnippetsComponent } from './snippets/snippets.component';
import { PhotographyComponent } from './photography/photography.component';
import { DesignComponent } from './design/design.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    OverlayComponent,
    AboutComponent,
    SnippetsComponent,
    PhotographyComponent,
    DesignComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    BasicRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
