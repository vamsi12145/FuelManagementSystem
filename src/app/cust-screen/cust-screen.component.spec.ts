import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustScreenComponent } from './cust-screen.component';

describe('CustScreenComponent', () => {
  let component: CustScreenComponent;
  let fixture: ComponentFixture<CustScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
