import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CheckoutConfirmationComponent } from './pages/checkout-confirmation/checkout-confirmation.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'category/:name',
        component: CategoryComponent
    }
    ,
    {
        path: 'checkout',
        component: CheckoutComponent
    },
    {
        path: 'checkout/success',
        component: CheckoutConfirmationComponent
    }
];
