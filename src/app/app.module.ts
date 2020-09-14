import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import { PessoaService } from './pessoa.service';
import { HttpClientModule } from '@angular/common/http';
import { PessoaModule } from './page/pessoa.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PessoaModule,
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
