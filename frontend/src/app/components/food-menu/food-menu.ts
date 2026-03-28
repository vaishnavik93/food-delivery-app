import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { CartService } from '../../services/cart'

@Component({
selector:'app-food-menu',
standalone:true,
imports:[CommonModule],
templateUrl:'./food-menu.html',
styleUrls:['./food-menu.css']
})

export class FoodMenuComponent implements OnInit{

foods:any[]=[]
    

constructor(private http:HttpClient, private cartService:CartService){}

ngOnInit(){
this.loadFoods()
}

loadFoods() {
  this.http.get<any[]>("https://localhost:44326/api/Food")
    .subscribe({
      next: (data) => {
        console.log("Data received:", data); // Check your browser console!
        this.foods = data;
      },
      error: (err) => {
        console.error("API Error (Check CORS or Connection):", err);
      }
    });
}
// loadFoods(){

// this.http.get<any[]>("https://localhost:44326/api/Food")
// .subscribe(data=>{
// this.foods = data
// })

// }

addToCart(food:any){
this.cartService.addItem(food)
}

}