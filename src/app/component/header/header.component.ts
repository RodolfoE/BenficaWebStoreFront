import { Component, ViewChild } from '@angular/core';
import { LeftSideMenuComponent } from '../leftSideMenu/leftsidemenu.component';

@Component({
    
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'app';
}
