import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePiloteComponent } from './create-pilote.component';

describe('CreatePiloteComponent', () => {
  let component: CreatePiloteComponent;
  let fixture: ComponentFixture<CreatePiloteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePiloteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePiloteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
