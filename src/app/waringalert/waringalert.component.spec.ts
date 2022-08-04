import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaringalertComponent } from './waringalert.component';

describe('WaringalertComponent', () => {
  let component: WaringalertComponent;
  let fixture: ComponentFixture<WaringalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaringalertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaringalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
