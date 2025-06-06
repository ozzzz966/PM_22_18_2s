import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationItemComponent } from './educationItem.component';

describe('EducationComponent', () => {
  let component: EducationItemComponent;
  let fixture: ComponentFixture<EducationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
