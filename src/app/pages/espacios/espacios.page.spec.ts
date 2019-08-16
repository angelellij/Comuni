import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaciosPage } from './espacios.page';

describe('EspaciosPage', () => {
  let component: EspaciosPage;
  let fixture: ComponentFixture<EspaciosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaciosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
