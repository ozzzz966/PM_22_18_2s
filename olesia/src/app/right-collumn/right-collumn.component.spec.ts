import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightCollumnComponent } from './right-collumn.component';

describe('RightCollumnComponent', () => {
  let component: RightCollumnComponent;
  let fixture: ComponentFixture<RightCollumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightCollumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightCollumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
