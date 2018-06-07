import { ProdutoMod } from '../models/produto';
import { ClienteMod } from '../models/cliente';

export class PedidoAoPagSeguro {
    _id? : string;
    mClient:ClienteMod;
    mChart:ProdutoMod[];    

    public constructor(){}
}