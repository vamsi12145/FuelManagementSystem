import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VwalletComponent } from './vwallet.component';

describe('VwalletComponent', () => {
  let component: VwalletComponent;
  let fixture: ComponentFixture<VwalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VwalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VwalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
