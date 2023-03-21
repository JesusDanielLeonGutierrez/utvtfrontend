import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraloriaComponent } from './contraloria.component';

describe('ContraloriaComponent', () => {
  let component: ContraloriaComponent;
  let fixture: ComponentFixture<ContraloriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContraloriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContraloriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
