import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FlexModule} from '@angular/flex-layout';
import {ParticlesModule} from 'angular-particle';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faStackOverflow, faNpm } from '@fortawesome/free-brands-svg-icons';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TypedDirective } from './typed.directive';
import { ContactComponent } from './contact/contact.component';
import { ParticleComponent } from './particle/particle.component';

library.add(faAngleDown, faGithub, faLinkedin, faStackOverflow, faNpm);

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    PortfolioComponent,
    TypedDirective,
    ContactComponent,
    ParticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexModule,
    ParticlesModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
