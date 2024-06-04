import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MainComponent } from './main-component';
import { ButtonModule } from '@cronosui/core/button';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { IconModule } from '@cronos/icons/icon';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopbarComponent,
    MenuComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    IconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
