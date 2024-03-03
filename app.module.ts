import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Itemscomponent } from './items.component';
import { ItemComponent } from './item/item.component';
import { ItemsService } from './item/items.service';

@NgModule({
  declarations: [
    AppComponent,
    Itemscomponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
