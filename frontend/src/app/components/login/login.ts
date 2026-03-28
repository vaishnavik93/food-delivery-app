
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
selector: 'app-login',
standalone: true,
imports: [CommonModule, FormsModule, HttpClientModule,RouterModule],
templateUrl: './login.html',
styleUrls: ['./login.css']
})

export class LoginComponent {

email=''
password=''

apiUrl="https://localhost:44326/api/Auth/login"

constructor(private http:HttpClient, private router:Router){}

login(){

const loginData={
email:this.email,
password:this.password
}

this.http.post<any>(this.apiUrl,loginData)
.subscribe({

next:(res)=>{

localStorage.setItem("user",JSON.stringify(res))

alert("Login successful")
this.router.navigate(['/menu']);


},

error:()=>{

alert("Invalid email or password")

}

})

}

}