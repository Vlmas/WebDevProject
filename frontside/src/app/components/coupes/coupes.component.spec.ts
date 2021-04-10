import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupesComponent } from './coupes.component';

describe('CoupesComponent', () => {
  let component: CoupesComponent;
  let fixture: ComponentFixture<CoupesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoupesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
