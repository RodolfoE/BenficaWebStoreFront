import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service'
import { Produto } from '../../models/produto'
import {  Router, ActivatedRoute, ParamMap } from '@angular/router'
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  mProduto:Observable<Produto>;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private service: ProdutosService) {}

  ngOnInit() {
    this.mProduto = this.route.paramMap
      .switchMap((params: ParamMap) => 
      this.service.getProduto(params.get('id'))
    );

    this.mProduto.subscribe((produto) => {
      console.log(produto);
    })
  }

}
