import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesHistoriqueComponent } from './commandes-historique.component';

describe('CommandesHistoriqueComponent', () => {
  let component: CommandesHistoriqueComponent;
  let fixture: ComponentFixture<CommandesHistoriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandesHistoriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandesHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
