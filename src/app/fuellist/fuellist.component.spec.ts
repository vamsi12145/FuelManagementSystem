import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuellistComponent } from './fuellist.component';

describe('FuellistComponent', () => {
  let component: FuellistComponent;
  let fixture: ComponentFixture<FuellistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuellistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
