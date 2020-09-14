import { Component, OnInit } from '@angular/core';
import { Pessoa } from './model/pessoa';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-crud-pessoa';
}