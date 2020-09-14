import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { PessoaListComponent } from './pessoa/pessoa-list.component';



@NgModule({
  declarations: [
    PessoaListComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    CardModule,
  ],
  exports: [
    PessoaListComponent
  ]
})
export class PessoaModule { }
