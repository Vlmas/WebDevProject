import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildYourLexusComponent } from './build-your-lexus.component';

describe('BuildYourLexusComponent', () => {
  let component: BuildYourLexusComponent;
  let fixture: ComponentFixture<BuildYourLexusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildYourLexusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildYourLexusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
