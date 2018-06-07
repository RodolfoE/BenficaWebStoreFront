import { Component, OnInit } from '@angular/core';
import { ClienteService } from './../../services/http/cliente.service'
import { ClienteMod } from './../../models/cliente'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mCliente: ClienteMod;
  mClienteService: ClienteService;
  constructor(clienteService: ClienteService, private router: Router) { 
    this.mClienteService = clienteService;
    this.mCliente = new ClienteMod();
  }

  ngOnInit() {
  }

  fzrLogin(){
    this.mClienteService.fzrLogin(this.mCliente).subscribe(param => {
      if (param.err != null){
        console.log("senha inválida");
      } else {
        this.mClienteService.initCliente(param);
        this.router.navigateByUrl('/');    
      }
    })
  }

}
