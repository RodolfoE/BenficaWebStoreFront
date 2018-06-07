import { ProdutoMod } from './../models/produto';
import { ClienteMod } from './../models/cliente';
import { ProdutosService } from '../services/http/produtos.service';

export class Produto {
  public mProdutos: ProdutoMod[];
  private mTdsProdutos: ProdutoMod[];
  private observer: any;

  public constructor(private produtosService: ProdutosService) {

  }

  public listarTdsProdutos(obs: any) {
    this.observer = obs;
    this.produtosService.getProdutosWithFullResponse()
      .subscribe((produtos) => {
        this.mProdutos = produtos.body;
        for (let i = 0; i < produtos.body.length; i++) {
          this.mProdutos[i].qtdFoto = [];
          for (let j = 0; j < produtos.body[i].caminhoFoto.length; j++) {
            this.mProdutos[i].qtdFoto.push(j);
          }
        }
        this.mTdsProdutos = this.mProdutos;
        console.log("blablablabla");
        console.log(this.mTdsProdutos);
        this.observer.next(this.mProdutos);
      }
      );
  }

  public listarProdutosNoPerfilDoCliente(client: ClienteMod) {

  }

  public addNovoProduto(prod: Produto) {

  }

  public alterarDadosProduto(prod: Produto) {

  }

  public buscarProdPorcategoria(cat: string, sex: string) {
    console.log(this.mProdutos);
    this.mProdutos.splice(0, this.mProdutos.length);
    this.mTdsProdutos.forEach(element => {
      var flag: boolean = false;
      for (var index = 0; index < element.categoria.length; index++) {
        if (!flag && element.categoria[index] == cat) {
          this.mProdutos.push(element);
          flag = true;
        }
      }
    });
    this.observer.next(this.mProdutos);
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
}

