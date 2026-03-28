import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './cart.html'
})
export class CartComponent implements OnInit {

  cart:any[] = [];
  total:number = 0;

  constructor(
    private cartService:CartService,
    private http:HttpClient,
    private router:Router
  ){}

  ngOnInit(){
  this.cart = this.cartService.getItems();
  this.calculateTotal();
}

  calculateTotal(){

    this.total = 0;

    this.cart.forEach(item=>{
      this.total += item.price;
    });

  }

  removeItem(index:number){

    this.cart.splice(index,1);

    this.calculateTotal();

  }

  placeOrder(){

    if(this.cart.length === 0){
      alert("Cart is empty");
      return;
    }

    const order = {

      customerId: 1,   // later replace with logged-in user
      totalAmount: this.total,
      items: this.cart

    };

    this.http.post("https://localhost:44378/api/Order",order)
    .subscribe({

      next:(res)=>{

        alert("Order Placed Successfully");

        this.cartService.clearCart();

        this.router.navigate(['/order-tracking']);

      },

      error:(err)=>{
        console.error(err);
        alert("Order failed");
      }

    });

  }

}