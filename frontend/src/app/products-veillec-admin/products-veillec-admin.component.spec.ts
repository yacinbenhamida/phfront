import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsVeillecAdminComponent } from './products-veillec-admin.component';

describe('ProductsVeillecAdminComponent', () => {
  let component: ProductsVeillecAdminComponent;
  let fixture: ComponentFixture<ProductsVeillecAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsVeillecAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsVeillecAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
