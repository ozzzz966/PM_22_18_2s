import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftFooterComponent } from './left-footer.component';

describe('LeftFooterComponent', () => {
  let component: LeftFooterComponent;
  let fixture: ComponentFixture<LeftFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
