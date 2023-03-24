import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiiutComponent } from './saiiut.component';

describe('SaiiutComponent', () => {
  let component: SaiiutComponent;
  let fixture: ComponentFixture<SaiiutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaiiutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaiiutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
