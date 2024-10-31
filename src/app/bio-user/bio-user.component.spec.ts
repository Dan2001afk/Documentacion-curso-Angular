import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioUserComponent } from './bio-user.component';

describe('BioUserComponent', () => {
  let component: BioUserComponent;
  let fixture: ComponentFixture<BioUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
