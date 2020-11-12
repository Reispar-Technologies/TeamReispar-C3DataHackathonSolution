import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatCardModule} from '@angular/material/card';
// import { MatProgressBarModule } from '@angular/material/progress-bar';

 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CtscanComponent } from './ctscan/ctscan.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import{  MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { CovidImpactComponent } from './covid-impact/covid-impact.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DatasourceComponent } from './datasource/datasource.component';
import { ProjectoverviewComponent } from './projectoverview/projectoverview.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { AnalyticsCorrelationComponent } from './analytics-correlation/analytics-correlation.component';
import { AnalyticsStatisticsComponent } from './analytics-statistics/analytics-statistics.component';
import { AnalyticsForecastingComponent } from './analytics-forecasting/analytics-forecasting.component';

@NgModule({
  declarations: [
    AppComponent,
    CtscanComponent,
    HomeComponent,
    CovidImpactComponent,
    AnalyticsComponent,
    DatasourceComponent,
    ProjectoverviewComponent,
    TeamMembersComponent,
    AnalyticsCorrelationComponent,
    AnalyticsStatisticsComponent,
    AnalyticsForecastingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  //   MatToolbarModule, 
  // MatIconModule, MatCardModule, 
  // MatButtonModule, MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
