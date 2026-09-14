import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartContentModalComponent } from './cart-content-modal.component';
import { CartService } from '../../../core/services/cart.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('CartContentModalComponent', () => {
  let component: CartContentModalComponent;
  let fixture: ComponentFixture<CartContentModalComponent>;
  let cartService: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartContentModalComponent],
      providers: [NgbActiveModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartContentModalComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display cart item count in title when cart is empty', () => {
    cartService.clearCart();
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement;
    const title = compiled.querySelector('.modal-title');
    
    expect(title.textContent).toContain('Cart Items (0)');
  });

  it('should display cart item count in title when cart has items', () => {
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
    
    const compiled = fixture.nativeElement;
    const title = compiled.querySelector('.modal-title');
    
    expect(title.textContent).toContain('Cart Items (1)');
  });

  it('should update cart item count when items are added', () => {
    cartService.clearCart();
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement;
    const title = compiled.querySelector('.modal-title');
    
    expect(title.textContent).toContain('Cart Items (0)');
    
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
    
    expect(title.textContent).toContain('Cart Items (1)');
    
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
    
    expect(title.textContent).toContain('Cart Items (2)');
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
    
    const compiled = fixture.nativeElement;
    const title = compiled.querySelector('.modal-title');
    
    // Should show 1 unique product, not 3
    expect(title.textContent).toContain('Cart Items (1)');
  });
});