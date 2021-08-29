import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicactionComponent } from './publicaction.component';

describe('PublicactionComponent', () => {
  let component: PublicactionComponent;
  let fixture: ComponentFixture<PublicactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
