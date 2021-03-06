import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import { AppComponent } from './app.component';
import { FullscreenOverlayContainer, OverlayContainer } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
