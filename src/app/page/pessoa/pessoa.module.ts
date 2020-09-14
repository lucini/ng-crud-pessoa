import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { PessoaListComponent } from './pessoa-list.component';
import { PessoaService } from './pessoa.service';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    PessoaListComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    ButtonModule,
  ],
  exports: [
    PessoaListComponent
  ],
  providers: [PessoaService]
})
export class PessoaModule { }
