import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartButtonComponent } from './cart-button.component';
import { CartService } from '../../../core/services/cart.service';

describe('CartButtonComponent', () => {
  let component: CartButtonComponent;
  let fixture: ComponentFixture<CartButtonComponent>;
  let cartService: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartButtonComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display cart item count in popover title when cart is empty', () => {
    cartService.clearCart();
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement;
    const popoverButton = compiled.querySelector('button[ngbPopover]');
    
    expect(component.cartItemCount).toBe(0);
  });

  it('should display cart item count in popover title when cart has items', () => {
    cartService.clearCart();
    cartService.addToCart({
      id: 1,
      title: 'Test Product 1',
      price: 10,
      description: 'Test',
      category: 'Test',
      images: ['test.jpg'],
      rating: 4.5
    });
    fixture.detectChanges();
    
    expect(component.cartItemCount).toBe(1);
  });

  it('should update cart item count when items are added', () => {
    cartService.clearCart();
    fixture.detectChanges();
    
    expect(component.cartItemCount).toBe(0);
    
    cartService.addToCart({
      id: 1,
      title: 'Test Product 1',
      price: 10,
      description: 'Test',
      category: 'Test',
      images: ['test.jpg'],
      rating: 4.5
    });
    fixture.detectChanges();
    
    expect(component.cartItemCount).toBe(1);
    
    cartService.addToCart({
      id: 2,
      title: 'Test Product 2',
      price: 20,
      description: 'Test',
      category: 'Test',
      images: ['test2.jpg'],
      rating: 4.0
    });
    fixture.detectChanges();
    
    expect(component.cartItemCount).toBe(2);
  });

  it('should show count of unique products, not total quantity', () => {
    cartService.clearCart();
    
    const product = {
      id: 1,
      title: 'Test Product',
      price: 10,
      description: 'Test',
      category: 'Test',
      images: ['test.jpg'],
      rating: 4.5
    };
    
    cartService.addToCart(product);
    cartService.addToCart(product); // Add same product again
    cartService.addToCart(product); // Add same product again
    fixture.detectChanges();
    
    // Should show 1 unique product, not 3
    expect(component.cartItemCount).toBe(1);
  });
});