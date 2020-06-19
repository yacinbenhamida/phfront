import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueFichesComponent } from './historique-fiches.component';

describe('HistoriqueFichesComponent', () => {
  let component: HistoriqueFichesComponent;
  let fixture: ComponentFixture<HistoriqueFichesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueFichesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueFichesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
