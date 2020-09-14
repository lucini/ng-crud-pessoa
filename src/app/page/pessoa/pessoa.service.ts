import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pessoa } from 'src/app/model/pessoa';

@Injectable()
export class PessoaService {

  private endPoint = 'pessoa';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.getUrl());
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.getUrl()}${id}`);
  }

  private getUrl(): string {
    return `${environment.api}/${this.endPoint}/`
  }
}
