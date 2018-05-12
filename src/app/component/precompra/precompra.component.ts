import { Component, OnInit, Inject } from '@angular/core';
import { ProdutosInChartService } from '../../services/servico-compartilhado.service';
import { Produto } from '../../models/produto';
import { PedidoAoPagSeguro } from '../../models/pedidoAoPagSeguro';
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-precompra',
  templateUrl: './precompra.component.html',
  styleUrls: ['./precompra.component.css']
})
export class PrecompraComponent implements OnInit {
  public mProdutosInChart: Produto[];
  public mFullPrice: any;

  constructor(inChart: ProdutosInChartService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private router: Router,
    private prodService: ProdutosService) {
    this.mProdutosInChart = inChart.mProdutosInChart;
    this.getBackToHomePage();
    this.calculatePrice();
  }

  getBackToHomePage() {
    if (this.mProdutosInChart.length == 0) {
      this.router.navigate(['/produtos']);
    }
  }

  openDialog(prod: Produto): void {
    let dialogRef = this.dialog.open(DeleteDialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let index = this.indexOfProdOnChart(prod, prod.tamanhoEscolhido);
        this.mProdutosInChart.splice(index, 1);
        this.calculatePrice();
        this.openSnackBar('Item removido do carrinho de compras com sucesso', 'Fechar').afterDismissed().subscribe(result =>{
          this.getBackToHomePage();
        });
      }
    });
  }

  calculatePrice() {
    this.mFullPrice = 0;
    this.mProdutosInChart.forEach(element => {
      this.mFullPrice += (element.preco) * (element.qtdInChart + 1);
    });
  }

  ngOnInit() {

  }

  changeSize(prod: Produto, size: string) {
    //procurar prod com msm id e size igual ao do parametro
    //increase the qtdInChart
    //alterar tamanho do prodId
    //remove produto da msm id e tamanho do chart
  }

  //Return the index of the prod in the chart or -1 in case it doesn't exist
  public indexOfProdOnChart(prod: Produto, tamanho: string) {
    for (let i = 0; i < this.mProdutosInChart.length; i++) {
      if (this.mProdutosInChart[i]._id == prod._id) {
        if (this.mProdutosInChart[i].tamanhoEscolhido == tamanho) {
          return i;
        }
      }
    }
    return -1;
  }

  openSnackBar(message: string, action: string) {
    return this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  payBuyings(){
    let pedido: PedidoAoPagSeguro;
    pedido = new PedidoAoPagSeguro();
    pedido.mChart = this.mProdutosInChart;
    this.prodService.payBuyings(pedido).subscribe(function(param){
      console.log(param);
    });
  }
}

@Component({
  selector: 'delete-dialog',
  templateUrl: 'delete-dialog.html',
  styleUrls: ['./precompra.component.css']
})
export class DeleteDialog {
  public removeIt: boolean;
  constructor(
    public dialogRef: MatDialogRef<DeleteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYes() {
    this.dialogRef.close(true);
  }
  onNo() {
    this.dialogRef.close(false);
  }



}