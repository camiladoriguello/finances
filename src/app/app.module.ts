import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.modules';

import { AppComponent } from './app.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { ListTransactionComponent } from './list-transaction/list-transaction.component';

import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { GraphicsTransactionComponent } from './graphics-transaction/graphics-transaction.component';
import { SettingsComponent } from './settings/settings.component';

registerLocaleData(pt)

@NgModule({
  declarations: [
    AppComponent,
    CreateTransactionComponent,
    ListTransactionComponent,
    GraphicsTransactionComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
