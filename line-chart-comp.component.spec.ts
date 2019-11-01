import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartCompComponent } from './line-chart-comp.component';

describe('LineChartCompComponent', () => {
  let component: LineChartCompComponent;
  let fixture: ComponentFixture<LineChartCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
