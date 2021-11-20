import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentosVisualComponent } from './intentos-visual.component';

describe('IntentosVisualComponent', () => {
  let component: IntentosVisualComponent;
  let fixture: ComponentFixture<IntentosVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntentosVisualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentosVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
