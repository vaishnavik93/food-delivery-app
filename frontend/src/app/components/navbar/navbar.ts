

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';

@Component({
selector:'app-navbar',
standalone:true,
imports:[CommonModule,RouterModule],
templateUrl:'./navbar.html'
})

export class NavbarComponent{

cartCount:number=0

constructor(private cartService:CartService){}

ngOnInit(){
this.cartCount=this.cartService.getCartCount()
}

}