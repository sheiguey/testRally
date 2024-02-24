import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Final1Component } from './final-1.component';

describe('Final1Component', () => {
  let component: Final1Component;
  let fixture: ComponentFixture<Final1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Final1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Final1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
