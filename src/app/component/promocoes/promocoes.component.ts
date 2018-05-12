import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgxSlideshowModule } from 'ngx-slideshow';


@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.css']
})
export class PromocoesComponent {
  url:string[] = ['assets/produtos/camisas/000001_lacoste_1.jpg', 'assets/produtos/camisas/000001_lacoste_2.jpg'];
  mPosition: number;

  constructor(){
    this.mPosition = 0;
  }

  moveCursorToRight(){
    this.mPosition++;
    if (this.mPosition == this.url.length){
      this.mPosition = 0;
    } 
    console.log(this.mPosition +" - "+ this.url.length);
  }

  moveCursorToLeft(){
    this.mPosition--;
    if (this.mPosition == -1){
      this.mPosition = this.url.length -1;
    }
    console.log(this.mPosition +" - "+ this.url.length);
  }
  
}
