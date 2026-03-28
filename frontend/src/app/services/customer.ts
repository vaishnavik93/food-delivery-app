
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn:'root'
})

export class CustomerService {

apiUrl="https://localhost:44326/api/Customer"

constructor(private http:HttpClient){}

register(customer:any){

return this.http.post(`${this.apiUrl}/register`,customer)

}

getCustomers(){

return this.http.get<any[]>(this.apiUrl)

}

}