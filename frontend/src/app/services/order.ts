
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn:'root'
})

export class OrderService {

apiUrl="https://localhost:44326/api/Order"

constructor(private http:HttpClient){}

placeOrder(order:any){

return this.http.post(this.apiUrl,order)

}

getOrders(){

return this.http.get<any[]>(this.apiUrl)

}

getCustomerOrders(customerId:number){

return this.http.get<any[]>(`${this.apiUrl}/customer/${customerId}`)

}

updateOrderStatus(orderId:number,status:string){

return this.http.put(`${this.apiUrl}/${orderId}/status`,status)

}

}