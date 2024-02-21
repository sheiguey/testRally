import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatSpecialComponent } from './resultat-special.component';

describe('ResultatSpecialComponent', () => {
  let component: ResultatSpecialComponent;
  let fixture: ComponentFixture<ResultatSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultatSpecialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultatSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
