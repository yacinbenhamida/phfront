import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieFichesComponent } from './saisie-fiches.component';

describe('SaisieFichesComponent', () => {
  let component: SaisieFichesComponent;
  let fixture: ComponentFixture<SaisieFichesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisieFichesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieFichesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
