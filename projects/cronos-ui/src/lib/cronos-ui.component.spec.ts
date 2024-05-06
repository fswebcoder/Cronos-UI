import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronosUIComponent } from './cronos-ui.component';

describe('CronosUIComponent', () => {
  let component: CronosUIComponent;
  let fixture: ComponentFixture<CronosUIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CronosUIComponent]
    });
    fixture = TestBed.createComponent(CronosUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
