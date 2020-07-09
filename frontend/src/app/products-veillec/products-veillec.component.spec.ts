import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsVeillecComponent } from './products-veillec.component';

describe('ProductsVeillecComponent', () => {
  let component: ProductsVeillecComponent;
  let fixture: ComponentFixture<ProductsVeillecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsVeillecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsVeillecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
