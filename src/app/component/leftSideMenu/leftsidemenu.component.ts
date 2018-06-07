import { Component, Input, Output, EventEmitter, ViewChild,  ElementRef ,Renderer2} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Produto } from '../../controller/produto';
import { ProdutosService } from './../../services/http/produtos.service';


@Component({

  selector: 'app-left-side-menu',
  templateUrl: './leftsidemenu.component.html',
  styleUrls: ['./leftsidemenu.component.css'],
  outputs: ['filtrar']
})
export class LeftSideMenuComponent {
  /*
  public filtrar: EventEmitter<any> = new EventEmitter();
  mProduto: Produto;
  mArrayCategorias = [];

  //bindins
  mMulherCalca: boolean;
  mMulherCamisa: boolean;
  mMulherCalcado: boolean;
  mMulherAcessorio: boolean;

  autoTicks = true;
  max = 500;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = false;

  constructor(private rd: Renderer2, public mNav: ElementRef, private produtosService: ProdutosService) {
    this.mProduto = new Produto(produtosService);
    this.mProduto.mProdutos.categorias = [];
    this.mMulherCalca = false;
  }

  filtrarPorPreco() {
    this.mProduto.preco = { $lt: this.value };
    this.filtrar.next(this.mProduto);
    console.log(`Alterado Objeto de Query, abaixo: `);
    console.log(JSON.stringify(this.mProduto));
  }

  categorizar(category, event) {
    switch (event != null && event.currentTarget.attributes.id.nodeValue) {

      case 'mulherCalca':
        this.mMulherCalca = !this.mMulherCalca;
        //adiciona Calca
        if (this.mMulherCalca) {
          this.adicionarCategoria(category);
        }
        //Remove Calca
        else {
          this.removerCategoria(category);
        }
        break;

      case 'mulherCamisa':
        this.mMulherCamisa = !this.mMulherCamisa;
        //adiciona Calca
        if (this.mMulherCamisa) {
          this.adicionarCategoria(category);
        }
        //Remove Calca
        else {
          this.removerCategoria(category);
        }
        break;

      case 'mulherCalcado':
        this.mMulherCalcado = !this.mMulherCalcado;
        //adiciona Calca
        if (this.mMulherCalcado) {
          this.adicionarCategoria(category);
        }
        //Remove Calca
        else {
          this.removerCategoria(category);
        }
        break;

      case 'mulherAcessorio':
        this.mMulherAcessorio = !this.mMulherAcessorio;
        //adiciona Calca
        if (this.mMulherAcessorio) {
          this.adicionarCategoria(category);
        }
        //Remove Calca
        else {
          this.removerCategoria(category);
        }
        break;
    }


  }

  adicionarCategoria(category) {
    this.mProduto.categorias.push({categoria: category});
    this.filtrar.next(this.mProduto);
  }

  removerCategoria(category) {
    let element = this.mProduto.categorias;
    for (let i = 0; i < element.length; i++)
      if (category[0] == element[i].categoria[0] && category[1] == element[i].categoria[1]) {
        let itemRemovido = this.mProduto.categorias.splice(i, 1);
        console.log('Removido Item abaixo:');
        console.log(JSON.stringify(itemRemovido));
        if (this.mProduto.categorias.length == 0){
          this.mProduto = new Produto(this.produtosService);
        }
        
        this.filtrar.next(this.mProduto);
      }
  }

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 2;
*/
}
