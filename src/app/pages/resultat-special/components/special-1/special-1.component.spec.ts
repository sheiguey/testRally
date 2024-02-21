import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Special1Component } from './special-1.component';

describe('Special1Component', () => {
  let component: Special1Component;
  let fixture: ComponentFixture<Special1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Special1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Special1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
