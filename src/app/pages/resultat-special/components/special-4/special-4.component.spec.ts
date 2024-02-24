import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Special4Component } from './special-4.component';

describe('Special4Component', () => {
  let component: Special4Component;
  let fixture: ComponentFixture<Special4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Special4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Special4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
