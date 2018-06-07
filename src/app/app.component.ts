import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ProdutosService } from './services/http/produtos.service'
import { ClienteService } from './services/http/cliente.service'
import { ClienteMod } from './models/cliente'
import { ProdutosComponent } from './component/produtos/produtos.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {    
  mCliente: ClienteMod;

  constructor(public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private produtosService: ProdutosService,
     private clienteService: ClienteService) {
    clienteService.emmiter.subscribe(param => {
      this.mCliente = param;
    });
  }

  categorizar(sex: string, categoria: string){
    this.produtosService.buscarProdPorcategoria(categoria, sex);
  }

  deslogarCliente(){
    this.clienteService.deslogarCliente();
  }

  ngOnInit(){
  }

  openSnackBar(message: string, action: string) {
    return this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DeleteDialog, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.openSnackBar('Usuário Deslogado Com Sucesso', 'Fechar').afterDismissed().subscribe(result =>{});
        this.deslogarCliente();
      }
    });
  }
  
}

@Component({
  selector: 'delete-dialog',
  templateUrl: 'delete-dialog.html',
  styleUrls: ['./app.component.css']
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