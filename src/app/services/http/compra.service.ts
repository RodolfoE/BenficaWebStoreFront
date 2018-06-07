import { Injectable } from '@angular/core';
import { CompraMod } from './../../models/compra'

@Injectable()
export class CompraService {

  mCompra: CompraMod;
  constructor() { }

  public gerarNovoEnvio(mCompra: CompraMod) {

  }

  public finalizarCompra(mCompra: CompraMod) {

  }

  public addCompraAoHistorico() {

  }

  public checkUsuarioCadastro(): boolean {
    return false;
  }

  public addCompraFiado() {
    this.mCompra.isVendaEmAberto = true;
  }

  public exibirHistoricoDeCompraPorData(): CompraMod[] {
    return null;
  }

  public exibirHistoricoDeCompraPorClient(): CompraMod[] {
    return null;
  }

  public exibirHistoricoDeCompraPorIntervaloDeData(): CompraMod[] {
    return null;
  }

  public exibirVendaFiado(): CompraMod[] {
    return null;
  }

  public finalizarCompraFiado() {

  }

  public exibirVendaNaoRecebida() {

  }

}
