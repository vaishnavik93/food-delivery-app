import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
providedIn:'root'
})

export class FoodService{

private apiUrl="https://localhost:44326/api/Food"

constructor(private http:HttpClient){}

getFoods():Observable<any>{
return this.http.get(this.apiUrl)
}

addFood(food:any):Observable<any>{
return this.http.post(this.apiUrl,food)
}

updateFood(id:number,food:any):Observable<any>{
return this.http.put(`${this.apiUrl}/${id}`,food)
}

deleteFood(id:number):Observable<any>{
return this.http.delete(`${this.apiUrl}/${id}`)
}

}