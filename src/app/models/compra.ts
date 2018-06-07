import {ClienteMod} from './cliente';
import {CarrinhoMod} from './carrinho';

export class CompraMod{
    mCarrinho: CarrinhoMod;
    mClient: string;
    mRecebido: boolean;
    mData: Date;
    isVendaEmAberto:boolean;

    constructor(){
        
    }
}