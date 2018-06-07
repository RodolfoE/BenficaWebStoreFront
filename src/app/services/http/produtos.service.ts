import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { ClienteMod } from '../../models/cliente';
import { ProdutoMod } from '../../models/produto';
import { FormatarstringService } from './../formatarstring.service'
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { PedidoAoPagSeguro } from '../../controller/pedidoAoPagSeguro';


@Injectable()
export class ProdutosService {
  formatacao: FormatarstringService;
  domain: string = 'http://localhost:3000';
  @Output() test: EventEmitter<ProdutoMod[]> = new EventEmitter();
  public mProdutos: ProdutoMod[];
  public mTdsProdutos: ProdutoMod[];
  private observer: any;

  constructor(private http: HttpClient) {
    this.formatacao = new FormatarstringService();
    this.mProdutos = [];
    this.mTdsProdutos = [];

    if (this.mProdutos.length <= 0){
      this.getAllProducts();
    }
  }

  public updateProducts() {
    this.test.emit(this.mProdutos);
  }

  public listarTdsProdutos() {

  }

  public getAllProducts() {
      this.getProdutosWithFullResponse()
        .subscribe((produtos) => {
          this.mProdutos = produtos.body;
          for (let i = 0; i < produtos.body.length; i++) {
            this.mProdutos[i].qtdFoto = [];
            for (let j = 0; j < produtos.body[i].caminhoFoto.length; j++) {
              this.mProdutos[i].qtdFoto.push(j);
            }
          }
          this.mProdutos.forEach(element => {
            this.mTdsProdutos.push(element);
          });
          this.updateProducts();
        }
        );
  }

  getProdutos() {
    return this.http.get<ProdutoMod[]>(this.domain + '/prod/produtos')
      .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
      )
      .map(res => <ProdutoMod>res);
  }

  getProdutosWithFullResponse(): Observable<HttpResponse<ProdutoMod[]>> {
    return this.http.get<ProdutoMod[]>(this.domain + '/prod/produtos', { observe: 'response' })
      .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
      )
      .map(res => res);
  }

  getProduto(id: string): ProdutoMod {
    this.mTdsProdutos.forEach(element => {
      if (element._id == id) {
        return element;
      }
    });
    return null;
  }

  public buscarProdPorcategoria(cat: string, sex: string) {
    console.log(this.mTdsProdutos);
    this.mProdutos.splice(0, this.mProdutos.length);

    this.mTdsProdutos.forEach(element => {
      console.log(element.genero.toLowerCase() + "  -  " + sex.toLowerCase());
      if (element.genero.toLowerCase() == sex.toLowerCase()) {
        var flag: boolean = false;
        for (var index = 0; index < element.categoria.length; index++) {
          console.log(element.categoria[index].toLowerCase() + " - " + cat.toLowerCase());
          if (!flag && element.categoria[index].toLowerCase() == cat.toLowerCase()) {
            this.mProdutos.push(element);
            flag = true;
          }
        }
      }
    });
    this.updateProducts();
  }

  public buscarProdPorCodigo(codDeBarra: string) {
    this.mProdutos.splice(0, this.mProdutos.length);
    this.mTdsProdutos.forEach(element => {
      if (element._id == codDeBarra) {
        this.mProdutos.push(element);
      }
    });
  }

  public buscarProdPorMarca(marca: string) {
    this.mProdutos.splice(0, this.mProdutos.length);
    this.mTdsProdutos.forEach(element => {
      if (element.marca == marca) {
        this.mProdutos.push(element);
      }
    });
  }

  public buscarProdPorPreco(precoMax: number, precoMin: number) {
    this.mProdutos.splice(0, this.mProdutos.length);
    this.mTdsProdutos.forEach(element => {
      if (element.preco <= precoMax && element.preco >= precoMin) {
        this.mProdutos.push(element);
      }
    });
  }

  public buscarProdPorGenero(sex: string) {
    this.mProdutos.splice(0, this.mProdutos.length);
    this.mTdsProdutos.forEach(element => {
      if (element.genero == sex) {
        this.mProdutos.push(element);
      }
    });
  }

  public listarProdutosNoPerfilDoCliente(client: ClienteMod) {

  }

  public addNovoProduto(prod: ProdutoMod) {

  }

  public alterarDadosProduto(prod: ProdutoMod) {

  }

  addTask(newTask) {
    return this.http.post<ProdutoMod>(this.domain + '/prod/produtos', newTask)
      .map(res => res);
  }

  deleteTask(id) {
    return this.http.delete(`$(this.domain)/prod/tasks/$(id)`)
      .map(res => res);
  }

  updateTask(newTask) {
    return this.http.put(`$(this.domain)/prod/tasks/$(newTask.id)`, newTask)
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
  /*
  getProduto(id: string) {
    return this.http.get<ProdutoMod>(this.domain + '/api/produto/' + id).map(res => res);
  }

  payBuyings(chart: PedidoAoPagSeguro) {
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
*/
}
