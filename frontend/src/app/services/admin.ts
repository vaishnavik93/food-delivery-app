
import { Injectable } from '@angular/core';
import { FoodService } from './food';
import { OrderService } from './order';

@Injectable({
providedIn:'root'
})

export class AdminService {

constructor(
private foodService:FoodService,
private orderService:OrderService
){}

getFoods(){

return this.foodService.getFoods()

}

addFood(food:any){

return this.foodService.addFood(food)

}

deleteFood(id:number){

return this.foodService.deleteFood(id)

}

getOrders(){

return this.orderService.getOrders()

}

updateOrderStatus(id:number,status:string){

return this.orderService.updateOrderStatus(id,status)

}

}