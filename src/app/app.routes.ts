import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CheckoutConfirmationComponent } from './pages/checkout-confirmation/checkout-confirmation.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'category/:name',
        pathMatch: 'full',
        component: CategoryComponent
    },
    {
        path: 'checkout',
        pathMatch: 'full',
        component: CheckoutComponent
    },
    {
        path: 'checkout/success',
        pathMatch: 'full',
        component: CheckoutConfirmationComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        component: NotFoundComponent
    }
];
