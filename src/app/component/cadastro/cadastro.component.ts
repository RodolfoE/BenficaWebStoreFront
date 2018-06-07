import { Component, OnInit } from '@angular/core';
import { ClienteMod } from './../../models/cliente';
import { ClienteService } from './../../services/http/cliente.service'
import { EnderecoMod } from './../../models/endereco';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  mCliente:ClienteMod;
  mClienteService: ClienteService;
  

  constructor(clienteService:ClienteService, private router: Router) {
    this.mClienteService = clienteService;
    this.mCliente = new ClienteMod();
  }

  ngOnInit() {
  }

  salvarCadastro(){
    console.log(JSON.stringify(this.mCliente));
    this.mClienteService.addCliente(this.mCliente).subscribe(param =>{
      this.router.navigateByUrl('/produtos');      
    })
  }

}
