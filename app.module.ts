import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartCompComponent } from './line-chart-comp/line-chart-comp.component';
import { MultiLineChartComponent } from './multi-line-chart/multi-line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartCompComponent,
    MultiLineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
