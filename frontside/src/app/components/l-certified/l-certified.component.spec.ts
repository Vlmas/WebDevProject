import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LCertifiedComponent } from './l-certified.component';

describe('LCertifiedComponent', () => {
  let component: LCertifiedComponent;
  let fixture: ComponentFixture<LCertifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LCertifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LCertifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
