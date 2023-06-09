import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RCiudadanoComponent } from './rciudadano.component';

describe('RCiudadanoComponent', () => {
  let component: RCiudadanoComponent;
  let fixture: ComponentFixture<RCiudadanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RCiudadanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RCiudadanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
