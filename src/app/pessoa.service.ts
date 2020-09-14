import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pessoa } from './model/pessoa';
import { environment } from 'src/environments/environment';

@Injectable()
export class PessoaService {

  private endPoint = 'pessoa';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.getUrl());
  }

  private getUrl(): string {
    return `${environment.api}/${this.endPoint}/`
  }
}
