import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout-confirmation',
  imports: [RouterLink],
  templateUrl: './checkout-confirmation.component.html',
  styleUrl: './checkout-confirmation.component.css',
  standalone:true
})
export class CheckoutConfirmationComponent {
  today = new Date();
  
  getDate(){
    let year = this.today.getFullYear();
    let month = this.today.getMonth() + 1; 
    let day = this.today.getDate();

    return month +'/'+day+'/'+year;
  }
}
