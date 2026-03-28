import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { FoodMenuComponent } from './components/food-menu/food-menu';
import { CartComponent } from './components/cart/cart';
import { OrderHistoryComponent } from './components/order-history/order-history';
import { FoodManagementComponent } from './components/admin/food-management/food-management';
import { OrderManagementComponent } from './components/admin/order-management/order-management';
import { OrderTrackingComponent } from './components/order-tracking/order-tracking';

export const routes: Routes = [

{ path:'', redirectTo:'login', pathMatch:'full' },

{ path:'login', component:LoginComponent },

{ path:'register', component:RegisterComponent },

{ path:'menu', component:FoodMenuComponent },
{path:'',redirectTo:'menu',pathMatch:'full'},
{ path:'cart', component:CartComponent },
{ path:'order-tracking', component:OrderTrackingComponent },
{ path:'orders', component:OrderHistoryComponent },

{ path:'track/:id', component:OrderTrackingComponent },

{ path:'admin/foods', component:FoodManagementComponent },

{ path:'admin/orders', component:OrderManagementComponent }

];