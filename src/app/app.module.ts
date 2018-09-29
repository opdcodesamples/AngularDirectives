import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { HostListenerHighlightDirective } from './basic-highlight/hostlistener-highlight.directive';
import { HostListenerFontColorDirective } from './basic-highlight/hostlistener-fontcolor.directive';
import { HostBindingHighlightDirective } from './basic-highlight/hostbinding-highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    HostListenerHighlightDirective,
    HostListenerFontColorDirective,
    HostBindingHighlightDirective,
    UnlessDirective
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
