import { Comentario } from './comentario';
import { ProdutosService } from '../services/produtos.service';

export class Produto {
    //variáveis de banco
    _id? : string;
    nomeProduto: string;
    marca: string;
    categorias: any[]; //['feminino', 'calca']
    preco: any;
    freteGratuido: boolean;
    freteGratuito: boolean;
    tamanhos: string[];
    tamanhoEscolhido: string;
    descricao: string;
    caminhoFoto: string[]; //['assets/produtos/camisas/000001_lacoste_1.jpg', 'assets/produtos/camisas/000001_lacoste_2.jpg'];
    qtdFoto: number[];
    qtdInChart:number;
    qtdEmEstoque:number;

    mComentario: Comentario[];

    public constructor(private produtosService: ProdutosService){
        this.preco = 10000;
        this.qtdInChart = 0;
    }

    public listarTdsProdutos() : Produto[]{
        var mProdutosListados: Produto[];

        this.produtosService.getProdutosWithFullResponse()
        .subscribe((produtos) => {
          console.log(produtos.headers.keys().map(key => `${key}: ${produtos.headers.get(key)}`))
          mProdutosListados = produtos.body;
          for (let i = 0; i < produtos.body.length; i++) {  
            for (let j = 0; j < produtos.body[i].caminhoFoto.length; j++) {
              mProdutosListados[i].qtdFoto = [];
              mProdutosListados[i].qtdFoto.push(j);
              mProdutosListados[i].qtdInChart = 0;
            }
          }
        });
        return mProdutosListados;

    }
}