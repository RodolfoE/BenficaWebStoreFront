import { CompraMod } from './../models/compra';
export class Compra {
    mCompra: CompraMod;

    constructor(){
        this.mCompra = new CompraMod();
    }

    public gerarNovoEnvio(mCompra: Compra){

    }

    public finalizarCompra(mCompra: Compra){

    }

    public addCompraAoHistorico(){

    }

    public checkUsuarioCadastro():boolean{
        return false;
    }

    public addCompraFiado(){
        this.mCompra.isVendaEmAberto = true;
    }

    public exibirHistoricoDeCompraPorData():Compra[]{
        return null;
    }

    public exibirHistoricoDeCompraPorClient():Compra[]{
        return null;
    }

    public exibirHistoricoDeCompraPorIntervaloDeData():Compra[]{
        return null;
    }

    public exibirVendaFiado():Compra[]{
        return null;
    }

    public finalizarCompraFiado(){

    }

    public exibirVendaNaoRecebida(){

    }




}
