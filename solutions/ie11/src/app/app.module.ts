import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component'
import { HitComponent } from './hit/hit.component'
import { HitTypeComponent } from './hit-type/hit-type.component'
import { MainComponent } from './main/main.component'
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HitComponent,
    MainComponent,
    HitTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
