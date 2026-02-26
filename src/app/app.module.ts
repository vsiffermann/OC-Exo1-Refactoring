import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CountryComponent } from "./pages/country/country.component";
import { HeaderComponent } from './core/components/header/header.component';
import { MedalChartComponent } from './core/components/medal-chart/medal-chart.component';
import { CountryChartComponent } from './core/components/country-chart/country-chart.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, CountryComponent, HeaderComponent, MedalChartComponent, CountryChartComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
