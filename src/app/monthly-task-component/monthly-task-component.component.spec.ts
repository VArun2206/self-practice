import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyTaskComponentComponent } from './monthly-task-component.component';

describe('MonthlyTaskComponentComponent', () => {
  let component: MonthlyTaskComponentComponent;
  let fixture: ComponentFixture<MonthlyTaskComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyTaskComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyTaskComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
