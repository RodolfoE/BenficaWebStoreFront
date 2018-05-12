import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from '../component/produto/produto.component';
import { ProdutosComponent } from '../component/produtos/produtos.component';
import { RouterModule, Routes } from '@angular/router';
import { PrecompraComponent } from '../component/precompra/precompra.component';
import { LeftSideMenuComponent } from '../component/leftSideMenu/leftsidemenu.component';

const appRoutes: Routes = [
  { path: 'produto/:id', component: ProdutoComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'precompra', component: PrecompraComponent},
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
