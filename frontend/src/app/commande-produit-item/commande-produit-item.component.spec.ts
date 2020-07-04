import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeProduitItemComponent } from './commande-produit-item.component';

describe('CommandeProduitItemComponent', () => {
  let component: CommandeProduitItemComponent;
  let fixture: ComponentFixture<CommandeProduitItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeProduitItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeProduitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
