import { Injectable, EventEmitter, Output } from '@angular/core';
import { ClienteMod } from '../../models/cliente';
import { HttpResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { FormatarstringService } from './../formatarstring.service'
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { CompraMod } from './../../models/compra';
import { ProdutoMod } from './../../models/produto'

@Injectable()
export class ClienteService {
  domain: string = 'http://localhost:3000';
  mCliente: ClienteMod;
  @Output() emmiter: EventEmitter<ClienteMod> = new EventEmitter();

  constructor(private http: HttpClient) { }

  initCliente(client: ClienteMod){
    this.mCliente = client;
    this.emmiter.emit(this.mCliente);
  }

  deslogarCliente(){
    this.mCliente = null;
    this.emmiter.emit(null);
  }

  getClientes() {
    return this.http.get<ClienteMod[]>(this.domain + '/api/produtos')
      .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
      )
      .map(res => <ClienteMod>res);
  }

  fzrLogin(cliente){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.domain + '/cli/login', JSON.stringify(cliente), httpOptions)
      .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
      )
      .map(res => res);
  }

  addCliente(Cliente: ClienteMod) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.domain + '/cli/cadastro_cliente', JSON.stringify(Cliente), httpOptions)
      .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
      )
      .map(res => res);
  }

  public exibirHistoricoDeCompra(): CompraMod {
    return null;
  }

  public exibirHistoricoDeCompraPorData(ascen: boolean): CompraMod {
    return null;
  }

  public exibirProdutosDestePerfil(): ProdutoMod[] {
    return null;
  }

  public addNovaCompra(compra: CompraMod) {

  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Algo de errado não está certo. Por favor, tente novamente mais tarde.');
  };
}
