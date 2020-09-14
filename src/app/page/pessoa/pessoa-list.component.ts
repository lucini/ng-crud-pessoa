import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/model/pessoa';
import { PessoaService } from 'src/app/pessoa.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss']
})
export class PessoaListComponent implements OnInit {

  value: Pessoa[] = [];
  cols: any[];

  constructor(private pessoaService: PessoaService) {
    this.cols = [
      { field: 'id', header: 'Código' },
      { field: 'nome', header: 'Nome' },
      { field: 'cpf', header: 'C.P.F' },
    ];
  }

  ngOnInit(): void {
    this.pessoaService.findAll().subscribe(pessoas => this.value = pessoas);
  }
}