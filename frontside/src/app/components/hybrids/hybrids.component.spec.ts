import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridsComponent } from './hybrids.component';

describe('HybridsComponent', () => {
  let component: HybridsComponent;
  let fixture: ComponentFixture<HybridsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HybridsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
