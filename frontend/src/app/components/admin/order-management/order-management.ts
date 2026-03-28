import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
selector:'app-order-management',
standalone:true,
imports:[CommonModule,HttpClientModule],
templateUrl:'./order-management.html'
})

export class OrderManagementComponent implements OnInit{

orders:any[]=[]

constructor(private http:HttpClient){}

ngOnInit(){

this.loadOrders()

}

loadOrders(){

this.http.get<any[]>("https://localhost:44378/api/Order")
.subscribe(data=>{

this.orders=data

})

}

updateStatus(orderId:number,status:string){

this.http.put(`https://localhost:44378/api/Order/${orderId}/status`,status)
.subscribe(()=>{

alert("Status Updated")

})

}

}