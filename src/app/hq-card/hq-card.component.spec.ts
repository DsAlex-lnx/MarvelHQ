import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqCardComponent } from './hq-card.component';

describe('HqCardComponent', () => {
  let component: HqCardComponent;
  let fixture: ComponentFixture<HqCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HqCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HqCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
