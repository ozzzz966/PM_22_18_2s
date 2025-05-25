import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftCollumnComponent } from './left-collumn.component';

describe('LeftCollumnComponent', () => {
  let component: LeftCollumnComponent;
  let fixture: ComponentFixture<LeftCollumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftCollumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftCollumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
