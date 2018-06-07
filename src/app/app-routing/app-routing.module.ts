import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from '../component/produto/produto.component';
import { ProdutosComponent } from '../component/produtos/produtos.component';
import { RouterModule, Routes } from '@angular/router';
import { PrecompraComponent } from '../component/precompra/precompra.component';
import { CadastroComponent } from '../component/cadastro/cadastro.component';
import { LeftSideMenuComponent } from '../component/leftSideMenu/leftsidemenu.component';
import { LoginComponent } from '../component/login/login.component';

const appRoutes: Routes = [
  { path: 'produto/:id', component: ProdutoComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'precompra', component: PrecompraComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/produtos', pathMatch: 'full'},
  { path: '**', component: LeftSideMenuComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )

  ],
  exports: [
    RouterModule
  ],
  declarations: [

  ]
})
export class AppRoutingModule { }
