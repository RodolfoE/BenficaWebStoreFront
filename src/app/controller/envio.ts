import { CompraMod } from '../models/compra';
import { ProdutoMod } from '../models/produto';
import { ClienteMod } from '../models/cliente';
export class Envio {
 

    public confirmarChegada(){

    }

    public estornarEnvioPorTroca(nomeResponsavel:string, compra: CompraMod, produtoAntigo:ProdutoMod, produtoNovo: ProdutoMod){
        //postar novo produto a ser enviado, postar chegada de um produto e marcar responsável!
    }

    public estornoSimples(){
        //só aguardar o produto chegar e enviar o dinheiro para o cliente.
    }
    
    public exibirTdsEnvios(){

    }

    public exibirEnviosPorData(asnc: boolean){

    }

    public exibirEnviosPorCliente(client:ClienteMod){

    }

    public exibirEnviosPorIntervaloDeData(dataInicial: Date, dataFinal: Date){

    }

    public exibirEnviosEmAberto(){
        
    }

    public postarEnvioAoCorreio(responsavel: string){

    }

    public confirmarPostagemAoCorreio(){

    }

}
