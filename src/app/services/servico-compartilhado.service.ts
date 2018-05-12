import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable()
export class ProdutosInChartService {
  public mProdutos: Produto[];
  public mProdutosInChart: Produto[];
  constructor() {
    this.mProdutos = [];
    this.mProdutosInChart = [];
  }

  public addProdToChart(prod: Produto){
    this.mProdutosInChart.push(prod);
    console.log(this.mProdutosInChart)
  }

  

}
