import { ChangeDetectorRef, ElementRef, Component, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public mFilteredItens = [];
  public objeto = {
    name: 'lol',
    preco: 1.00,
  }

  
  constructor() {
    //this.mFilteredItens = ['bla', ['bla', 'bla']];
    
  }

  addFilter(category:string, subcategory:string){
    console.log(this.mFilteredItens);
    if (this.mFilteredItens.length == 0){
      this.mFilteredItens[0] = [category, [subcategory]];
      console.log(this.mFilteredItens);
    }
    
  }
  

}
