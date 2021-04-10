import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiveIntoLexusComponent } from './dive-into-lexus.component';

describe('DiveIntoLexusComponent', () => {
  let component: DiveIntoLexusComponent;
  let fixture: ComponentFixture<DiveIntoLexusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiveIntoLexusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiveIntoLexusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
