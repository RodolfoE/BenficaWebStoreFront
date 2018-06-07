import { Injectable } from '@angular/core';
import { ProdutoMod } from './../../models/produto'
import { CarrinhoMod } from "./../../models/carrinho";
import { ClienteMod } from "./../../models/cliente";
import { CompraMod } from "./../../models/compra";
import { HttpResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { ClienteService } from "./cliente.service";


@Injectable()
export class CarrinhoService {
  mCompra: CompraMod[];
  domain: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private clienteService: ClienteService) {
    console.log('constructor');
    this.carrinhoCliente(true);
  }

  private carrinhoCliente(buscarClient: boolean) {
    if (buscarClient) {
      //existe json compra para este cliente
      console.log(this.clienteService.mCliente);
      if (this.clienteService.mCliente != null) {
        this.getCarrinhoClinte(this.clienteService.mCliente);
      } else {
        this.clienteService.emmiter.subscribe(param => {
          this.getCarrinhoClinte(param);
        })
      }
    } else {
      //se existe, dx como está
      if (this.mCompra.length > 0){

      } else { //se não existe, adiciona um
        console.log('blabla3');
      } 
    }
  }

  private postCompra(cli: ClienteMod, prods: ProdutoMod) {
    var json = {
      cliente: cli._id,
      isPago: false,
      isFiado: false,
      carrinho: {
        produtos: [prods._id]
      }
    }
    return this.http.post<CompraMod>(this.domain + '/comp/compra', json)
      .map(res => res);
  }

  public addItemAoCarrinho(prod: ProdutoMod, cli: ClienteMod) {

    //se existe add
    //se não, crie uma conta associada ao cliente
    /*
    if (this.mCompra.mCarrinho.mProdutos.length == 0) {
      this.postCompra(cli, prod).subscribe(param => {
        this.mCompra = param;
        console.log(this.mCompra);
      });
    } else {
      this.updateCompra(this.mCompra);
    }
    */
  }

  public getCarrinhoClinte(cli: ClienteMod) {
    this.getCarrinhoClienteFromApi(cli).subscribe(param => {
      console.log("here");
      this.mCompra = param;
      this.carrinhoCliente(false);
    })
  }

  private getCarrinhoClienteFromApi(cli: ClienteMod) {
    return this.http.get<CompraMod[]>(this.domain + '/comp/compra/$(cli.id)')
      .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
      )
      .map(res => <CompraMod[]>res);
  }

  /*
  public getCarrinhoClintee(cli: ClienteMod) {
    this.getCarrinhoClienteFromApi(cli).subscribe(param => {
      this.mCompra = param;
      if (this.mCompra.mClient == null) {
        this.postCompra(cli, null).subscribe(param => {
          this.mCompra = param;
          this.mCompra.mCarrinho = new CarrinhoMod();
          this.mCompra.mCarrinho.mProdutos = [];
        })
      }

      //updatecompra() faça
    })
  }
  */

  public updateCompra(comp: CompraMod) {
    this.updateCompraApi(comp).subscribe(param => {
      console.log(param);
    })
  }

  private updateCompraApi(comp: CompraMod) {
    return this.http.put(`$(this.domain)/comp/update_compra/$(comp.id)`, comp)
      .map(res => res);
  }

  public removerItemDoCarrinho(prod: ProdutoMod) {

  }

  public calcularPrecoTotal() {

  }

  public exibitItensDoCarrinho(): ProdutoMod[] {
    return null;
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
