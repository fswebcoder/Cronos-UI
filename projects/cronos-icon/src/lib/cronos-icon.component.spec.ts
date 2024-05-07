import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronosIconComponent } from './cronos-icon.component';

describe('CronosIconComponent', () => {
  let component: CronosIconComponent;
  let fixture: ComponentFixture<CronosIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CronosIconComponent]
    });
    fixture = TestBed.createComponent(CronosIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
