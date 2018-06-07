import {EnderecoMod} from './endereco';
import {CarrinhoMod} from './carrinho';

export class ClienteMod{
    _id: string;
    mNome: string;
    mUsuario: string;
    mSenha: string;
    mEmail: string;
    mGenero: string;
    mIdade: string;
    
    mEndereco:EnderecoMod;
    mCaminhoFotoPerfil:string;
    mCarrinho:CarrinhoMod;
    constructor(){
        this.mEndereco = new EnderecoMod();
    }
}