import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/http/produtos.service'
import { ProdutoMod } from '../../models/produto'
import {  Router, ActivatedRoute, ParamMap } from '@angular/router'
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  mProduto:Observable<ProdutoMod>;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private service: ProdutosService) {}

  ngOnInit() {

    /*
    this.mProduto = this.route.paramMap
      .switchMap((params: ParamMap) => 
      this.service.getProduto(params.get('id').toString());
    );
    */

    this.mProduto.subscribe((produto) => {
      console.log(produto);
    })
  }

}
