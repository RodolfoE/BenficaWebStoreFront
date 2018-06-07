import {ComentarioMod} from './comentario';
export class ProdutoMod{
 //variáveis de banco
 _id? : string;
 nomeProduto: string;
 marca: string;
 categoria: any[]; //['feminino', 'calca']
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
 mComentario: ComentarioMod[];
 genero: string;

  constructor(){
    
  }
}