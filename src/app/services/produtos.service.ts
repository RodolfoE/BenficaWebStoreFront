import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Produto } from '../models/produto';
import { FormatarstringService } from './formatarstring.service'
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { PedidoAoPagSeguro } from '../models/pedidoAoPagSeguro';


@Injectable()
export class ProdutosService {
  formatacao: FormatarstringService;
  domain: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {
    this.formatacao = new FormatarstringService();
  }

  getProdutos() {
    return this.http.get<Produto[]>(this.domain + '/api/produtos')
      .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
      )
      .map(res => <Produto>res);
  }

  getProdutosWithFullResponse(): Observable<HttpResponse<Produto[]>> {
    return this.http.get<Produto[]>(this.domain + '/api/produtos', { observe: 'response' })
      .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
      )
      .map(res => res);
  }

  payBuyings(chart:PedidoAoPagSeguro) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.domain + '/api/checkOut', JSON.stringify(chart), httpOptions)
      .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
      )
      .map(res => res);
  }


  getProduto(id: string) {
    return this.http.get<Produto>(this.domain + '/api/produto/' + id).map(res => res);
  }


  getProdutosFiltrados(filtro) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Produto[]>(this.domain + '/api/produtos', JSON.stringify(filtro), httpOptions)
      .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
      )
      .map(res => res);
  }

  addTask(newTask) {
    return this.http.post<Produto>(this.domain + '/api/produtos', newTask)
      .map(res => res);
  }

  deleteTask(id) {
    return this.http.delete(`$(this.domain)/api/tasks/$(id)`)
      .map(res => res);
  }

  updateTask(newTask) {
    return this.http.put(`$(this.domain)/api/tasks/$(newTask.id)`, newTask)
      .map(res => res);
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
