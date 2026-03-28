import { Injectable } from '@angular/core';

@Injectable({
providedIn:'root'
})

export class CartService{

cart:any[]=[]

addItem(item:any){
this.cart.push(item)
}

getItems(){
return this.cart
}

getCartCount(){
return this.cart.length
}

clearCart(){
this.cart=[]
}

}