import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPersonalComponentComponent } from './get-personal-component.component';

describe('GetPersonalComponentComponent', () => {
  let component: GetPersonalComponentComponent;
  let fixture: ComponentFixture<GetPersonalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPersonalComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPersonalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
