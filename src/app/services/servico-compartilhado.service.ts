import { Injectable } from '@angular/core';
import { ProdutoMod } from '../models/produto';
import { Produto } from '../controller/produto';
import { ProdutosService } from '../services/http/produtos.service';

@Injectable()
export class ServicoCompartilhado {
  public mProdutosController: Produto;

  constructor(private produtosService: ProdutosService) {
    this.mProdutosController = new Produto(produtosService);
  }  

  listarTdsProdutos(obs: any){
    this.mProdutosController.listarTdsProdutos(obs);
  }

  ordenarPorGenero(genero: string){
    this.mProdutosController.buscarProdPorGenero(genero);
  }

  ordenarPorCategoriaeGenero(cat: string, genero: string){
    this.mProdutosController.buscarProdPorcategoria(cat, genero);
  }

  ordenarPorPreco(precoMax: number, precoMin: number){
    this.mProdutosController.buscarProdPorPreco(precoMax, precoMin);
  }

  ordenarPorMarca(marca: string){
    this.mProdutosController.buscarProdPorMarca(marca);
  }

  ordenarPorCodigoDeBarra(cod: string){
    this.mProdutosController.buscarProdPorCodigo(cod);
  }
}
