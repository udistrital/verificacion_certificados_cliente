import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacionInformacionComponent } from './verificacion-informacion.component';

describe('VerificacionInformacionComponent', () => {
  let component: VerificacionInformacionComponent;
  let fixture: ComponentFixture<VerificacionInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificacionInformacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificacionInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
