import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Pessoa } from 'src/app/model/pessoa';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss']
})
export class PessoaListComponent implements OnInit {

  value: Pessoa[] = [];
  cols: any[];

  constructor(private pessoaService: PessoaService,
    private confirmationService: ConfirmationService) {
    this.cols = [
      { field: 'id', header: 'Código' },
      { field: 'nome', header: 'Nome' },
      { field: 'cpf', header: 'C.P.F' },
    ];
  }

  ngOnInit(): void {
    this.getDados();
  }

  getDados(): void {
    this.pessoaService.findAll().subscribe(pessoas => this.value = pessoas);
  }

  editar(pessoa: Pessoa): void {

  }

  remover(pessoa: Pessoa): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir a pessoa?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        const index = this.value.findIndex( p => p.id === pessoa.id)
        this.pessoaService.deleteById(pessoa.id).subscribe(() => this.value.splice(index, 1));
      }
  });
  }
}
