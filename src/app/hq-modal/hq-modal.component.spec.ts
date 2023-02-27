import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqModalComponent } from './hq-modal.component';

describe('HqModalComponent', () => {
  let component: HqModalComponent;
  let fixture: ComponentFixture<HqModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HqModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HqModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
