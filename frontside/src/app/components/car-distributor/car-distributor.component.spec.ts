import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDistributorComponent } from './car-distributor.component';

describe('CarDistributorComponent', () => {
  let component: CarDistributorComponent;
  let fixture: ComponentFixture<CarDistributorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDistributorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
