import {ProdutoMod} from './produto';

export class CarrinhoMod{
    mTotal:number;
    mProdutos:ProdutoMod[];

    constructor(){
        this.mProdutos = [];    
    }
}