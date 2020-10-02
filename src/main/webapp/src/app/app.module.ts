import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TickermainComponent } from './tickermain/tickermain.component';
import { HttpClientModule } from '@angular/common/http';
import { TickermainService } from './tickermain.service';
import { TickerActionComponent } from './ticker-action/ticker-action.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TickermainComponent,
    TickerActionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TickermainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
