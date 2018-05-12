import { Component } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { ProdutosInChartService } from '../../services/servico-compartilhado.service';
import { Produto } from '../../models/produto';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  providers: [ProdutosService]
})
export class ProdutosComponent {
  mProdutosListados: Produto[];
  mProdutos: Produto[];

  filtrar(args: Produto) {
    console.log(JSON.stringify(args));
    for (let i = 0; i < this.mProdutosListados.length; i++) {
      if (this.mProdutosListados[i].preco < args.preco) {
        console.log(this.mProdutosListados[i].preco + '<' + args.preco);

      } else {
        this.mProdutosListados.splice(i, 1);
        console.log(this.mProdutosListados[i].preco + '>' + args.preco);
      }
    }
    console.log(this.mProdutosListados);

  }

  constructor(private produtosService: ProdutosService, public inChart: ProdutosInChartService) {
    this.mProdutosListados = [];
    this.mProdutos = [];
    this.produtosService.getProdutosWithFullResponse()
      .subscribe((produtos) => {
        console.log(produtos.headers.keys().map(key => `${key}: ${produtos.headers.get(key)}`))
        this.mProdutosListados = produtos.body;
        for (let i = 0; i < produtos.body.length; i++) {  
          for (let j = 0; j < produtos.body[i].caminhoFoto.length; j++) {
            this.mProdutosListados[i].qtdFoto = [];
            this.mProdutosListados[i].qtdFoto.push(j);
            this.mProdutosListados[i].qtdInChart = 0;
          }
          inChart.mProdutos.push(produtos.body[i]);
        }
        this.mProdutos = this.mProdutosListados;
      });
  }

  public addProdToChart(prod: Produto, tamanho: string) {
    let index = this.indexOfProdOnChart(prod,tamanho);
    if (index == -1) {
      prod.tamanhoEscolhido = tamanho;
      console.log(prod)
      this.inChart.addProdToChart(prod);
    } else {
        this.inChart.mProdutosInChart[index].qtdInChart++;  
    }
  }

  //Return the index of the prod in the chart or -1 in case it doesn't exist
  public indexOfProdOnChart(prod: Produto, tamanho:string) {
    for (let i = 0; i < this.inChart.mProdutosInChart.length; i++) {
      if (this.inChart.mProdutosInChart[i]._id == prod._id) {
        if (this.inChart.mProdutosInChart[i].tamanhoEscolhido == tamanho){
          return i;          
        }
      }
    }
    return -1;
  }
}
