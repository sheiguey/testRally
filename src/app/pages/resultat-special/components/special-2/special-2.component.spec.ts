import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Special2Component } from './special-2.component';

describe('Special2Component', () => {
  let component: Special2Component;
  let fixture: ComponentFixture<Special2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Special2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Special2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
