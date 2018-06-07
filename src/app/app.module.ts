import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatCardModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material'
import { ProdutosService } from './services/http/produtos.service'
import { CompraService } from './services/http/compra.service'
import { ClienteService } from './services/http/cliente.service'

import { ServicoCompartilhado } from './services/servico-compartilhado.service';
import { BodyComponent } from './component/body/body.component';
import { HeaderComponent } from './component/header/header.component';
import { LeftSideMenuComponent } from './component/leftSideMenu/leftsidemenu.component';
import { ProdutosComponent } from './component/produtos/produtos.component';
import { PromocoesComponent } from './component/promocoes/promocoes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import 'hammerjs';
import { NgxSlideshowModule } from 'ngx-slideshow';
import { ProdutoComponent } from './component/produto/produto.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FooterComponent } from './component/footer/footer.component';
import { PrecompraComponent } from './component/precompra/precompra.component';
import { DeleteDialog } from './component/precompra/precompra.component';
import { CadastroComponent } from './component/cadastro/cadastro.component';
import { LoginComponent } from './component/login/login.component';
import { CarrinhoService } from "./services/http/carrinho.service";




@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    LeftSideMenuComponent,
    ProdutosComponent,
    PromocoesComponent,
    ProdutoComponent,
    FooterComponent,
    PrecompraComponent,
    DeleteDialog,
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    NgxSlideshowModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProdutosService, ClienteService, CarrinhoService, CompraService],
  bootstrap: [AppComponent],
  entryComponents: [DeleteDialog]
})
export class AppModule { }
