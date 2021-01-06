import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToolComponent } from './tool/tool.component';
import { TextCenterComponent } from './text_center/text_center.component';
import { CountComponent } from './count/count.component';
import { ActionComponent } from './action/action.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolComponent,
    HeaderComponent,
    TextCenterComponent,
    CountComponent,
    ActionComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
