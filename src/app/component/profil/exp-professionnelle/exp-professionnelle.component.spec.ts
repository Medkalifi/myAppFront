import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpProfessionnelleComponent } from './exp-professionnelle.component';

describe('ExpProfessionnelleComponent', () => {
  let component: ExpProfessionnelleComponent;
  let fixture: ComponentFixture<ExpProfessionnelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpProfessionnelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpProfessionnelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
