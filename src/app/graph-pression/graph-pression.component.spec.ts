import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphPressionComponent } from './graph-pression.component';

describe('GraphPressionComponent', () => {
  let component: GraphPressionComponent;
  let fixture: ComponentFixture<GraphPressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphPressionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphPressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
