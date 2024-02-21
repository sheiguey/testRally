import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatLapComponent } from './resultat-lap.component';

describe('ResultatLapComponent', () => {
  let component: ResultatLapComponent;
  let fixture: ComponentFixture<ResultatLapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultatLapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultatLapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
