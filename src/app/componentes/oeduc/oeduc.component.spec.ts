import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OEducComponent } from './oeduc.component';

describe('OEducComponent', () => {
  let component: OEducComponent;
  let fixture: ComponentFixture<OEducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OEducComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OEducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
