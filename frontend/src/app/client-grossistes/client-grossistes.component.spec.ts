import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientGrossistesComponent } from './client-grossistes.component';

describe('ClientGrossistesComponent', () => {
  let component: ClientGrossistesComponent;
  let fixture: ComponentFixture<ClientGrossistesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientGrossistesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientGrossistesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
