import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me.component';
import { KeyUpComponentOnBlur } from './on-blur-input.component';
import { LittleTourComponent } from './little-tour.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    KeyUpComponentOnBlur,
    LittleTourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
