import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProdutosService } from '../../services/http/produtos.service';
import { Produto } from '../../controller/produto';
import { ProdutoMod } from './../../models/produto';
import { Observable } from 'rxjs/Observable';
import { ClienteService } from './../../services/http/cliente.service';
import { CompraService } from './../../services/http/compra.service';

import { CarrinhoService } from './../../services/http/carrinho.service';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit {
  mObservable: any;
  mProdutos: ProdutoMod[];

  constructor(private produtosService: ProdutosService,
    private clienteService: ClienteService,
    private carrinhoService: CarrinhoService,
    private compraService: CompraService) {
    
    if (produtosService.mProdutos != null){
      this.mProdutos = produtosService.mProdutos;
    }

    this.produtosService.test.subscribe(prods => {
      this.mProdutos = prods;
      console.log(this.mProdutos);
    })
    if (clienteService.mCliente != null) {
      this.carrinhoService.getCarrinhoClinte(clienteService.mCliente);
      this.produtosService.listarProdutosNoPerfilDoCliente(clienteService.mCliente);
    }
  }

  addProdutoAoCarrinho(prod: ProdutoMod, tamanho: string) {
    if (this.clienteService.mCliente != null) {
      prod.tamanhoEscolhido = tamanho;
      this.carrinhoService.addItemAoCarrinho(prod, this.clienteService.mCliente);
    } else {
      console.log("Cliente não logado");
    }
  }

  ngOnInit() {

  }
}
