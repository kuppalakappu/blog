import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navItems = ['html','css','javascript','c','dotnet','docs']
  currentnav=''

 subnavItems = ['users','photos','docs','readme','videos','urls']
  currentsubnav=''
setsubNav(menu:string){
  console.log(menu)
  this.currentsubnav=menu
}

setNav(menu:string){
  this.currentnav=menu
}
}
