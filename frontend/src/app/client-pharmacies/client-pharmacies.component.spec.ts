import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPharmaciesComponent } from './client-pharmacies.component';

describe('ClientPharmaciesComponent', () => {
  let component: ClientPharmaciesComponent;
  let fixture: ComponentFixture<ClientPharmaciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPharmaciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPharmaciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
