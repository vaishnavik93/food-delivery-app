import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
selector:'app-food-management',
standalone:true,
imports:[CommonModule,HttpClientModule,FormsModule],
templateUrl:'./food-management.html'
})

export class FoodManagementComponent implements OnInit{

foods:any[]=[]

newFood={
name:'',
description:'',
price:0,
imageUrl:''
}

apiUrl="https://localhost:44378/api/Food"

constructor(private http:HttpClient){}

ngOnInit(){

this.loadFoods()

}

loadFoods(){

this.http.get<any[]>(this.apiUrl)
.subscribe(data=>{

this.foods=data

})

}

addFood(){

this.http.post(this.apiUrl,this.newFood)
.subscribe(()=>{

this.loadFoods()

})

}

deleteFood(id:number){

this.http.delete(this.apiUrl+"/"+id)
.subscribe(()=>{

this.loadFoods()

})

}

}