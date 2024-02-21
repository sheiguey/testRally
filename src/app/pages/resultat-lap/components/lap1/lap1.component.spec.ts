import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lap1Component } from './lap1.component';

describe('Lap1Component', () => {
  let component: Lap1Component;
  let fixture: ComponentFixture<Lap1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lap1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lap1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
