import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartButtonComponent } from "./shared/components/cart-button/cart-button.component";
import { PageAlertComponent } from "./shared/components/page-alert/page-alert.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CartButtonComponent, PageAlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce-angular';
}
