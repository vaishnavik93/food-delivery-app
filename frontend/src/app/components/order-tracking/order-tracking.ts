
import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router'

@Component({
selector:'app-order-tracking',
standalone:true,
imports:[CommonModule,HttpClientModule],
templateUrl:'./order-tracking.html',
styleUrls:['./order-tracking.css']
})

export class OrderTrackingComponent implements OnInit{

orderId:number=0
status:string=""

steps=[
"Order Placed",
"Preparing",
"Out for Delivery",
"Delivered"
]

currentStep=0

constructor(
private http:HttpClient,
private route:ActivatedRoute
){}

ngOnInit(){

this.orderId=Number(this.route.snapshot.paramMap.get('id'))

this.loadStatus()

setInterval(()=>{
this.loadStatus()
},5000)

}

loadStatus(){

this.http.get<any>(`https://localhost:44378/api/TrackOrder/${this.orderId}`)
.subscribe(data=>{

this.status=data.status

this.currentStep=this.steps.indexOf(this.status)

})

}

}