import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphHumiditeComponent } from './graph-humidite.component';

describe('GraphHumiditeComponent', () => {
  let component: GraphHumiditeComponent;
  let fixture: ComponentFixture<GraphHumiditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphHumiditeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphHumiditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
