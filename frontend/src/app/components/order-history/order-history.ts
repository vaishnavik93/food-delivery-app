import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
selector:'app-order-history',
standalone:true,
imports:[CommonModule, HttpClientModule, RouterModule],
templateUrl:'./order-history.html'
})

export class OrderHistoryComponent implements OnInit{

orders:any[]=[]

constructor(private http:HttpClient){}

ngOnInit(){

this.http.get<any[]>("https://localhost:44378/api/Order/customer/1")
.subscribe(data=>{
this.orders=data
})

}

}