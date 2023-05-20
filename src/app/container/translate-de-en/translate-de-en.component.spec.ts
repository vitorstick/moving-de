import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateDeEnComponent } from './translate-de-en.component';

describe('TranslateDeEnComponent', () => {
  let component: TranslateDeEnComponent;
  let fixture: ComponentFixture<TranslateDeEnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranslateDeEnComponent]
    });
    fixture = TestBed.createComponent(TranslateDeEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
