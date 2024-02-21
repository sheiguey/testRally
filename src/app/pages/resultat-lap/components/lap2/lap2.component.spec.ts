import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lap2Component } from './lap2.component';

describe('Lap2Component', () => {
  let component: Lap2Component;
  let fixture: ComponentFixture<Lap2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lap2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
