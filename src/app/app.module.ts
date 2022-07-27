import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { ParametersComponent } from './parameters/parameters.component';
import { ControlAlgogorythmOverviewComponent } from './control-algogorythm-overview/control-algogorythm-overview.component';
import { SoftwareArchitectureComponent } from './software-architecture/software-architecture.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlsoInvolvedComponent } from './also-involved/also-involved.component';
import { SbtComponent } from './sbt/sbt.component';
import { CurrentProjectsComponent } from './current-projects/current-projects.component';
import { PartnersComponent } from './partners/partners.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    FooterComponent,
    ParametersComponent,
    ControlAlgogorythmOverviewComponent,
    SoftwareArchitectureComponent,
    CoordinatorComponent,
    AlsoInvolvedComponent,
    SbtComponent,
    CurrentProjectsComponent,
    PartnersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
