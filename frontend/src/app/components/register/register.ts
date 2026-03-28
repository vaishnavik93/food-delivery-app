import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer';
import { RouterModule } from '@angular/router';

@Component({
selector: 'app-register',
standalone: true,
imports: [CommonModule, FormsModule, RouterModule],
templateUrl: './register.html',
styleUrls: ['./register.css']
})

export class RegisterComponent {

customer = {
name: '',
email: '',
password: '',
phone: '',
address: ''
};

constructor(
private customerService: CustomerService,
private router: Router
){}

register(){

this.customerService.register(this.customer)
.subscribe({

next: () => {

alert("Registration successful!");
this.router.navigate(['/login']);

},

error: () => {

alert("Registration failed");

}

});

}

}