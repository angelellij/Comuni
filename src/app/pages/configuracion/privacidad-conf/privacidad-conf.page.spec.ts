import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacidadConfPage } from './privacidad-conf.page';

describe('PrivacidadConfPage', () => {
  let component: PrivacidadConfPage;
  let fixture: ComponentFixture<PrivacidadConfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacidadConfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacidadConfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
