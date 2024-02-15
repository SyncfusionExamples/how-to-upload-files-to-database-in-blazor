import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanProgrammerComponent } from './planprogrammer.component';

describe('ChargeprogrammerComponent', () => {
  let component: PlanProgrammerComponent;
  let fixture: ComponentFixture<PlanProgrammerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanProgrammerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanProgrammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
