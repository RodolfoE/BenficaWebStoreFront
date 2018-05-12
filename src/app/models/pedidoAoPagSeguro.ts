import { Produto } from '../models/produto';
import { Client } from '../models/client';

export class PedidoAoPagSeguro {
    _id? : string;
    mClient:Client;
    mChart:Produto[];    

    public constructor(){}
}