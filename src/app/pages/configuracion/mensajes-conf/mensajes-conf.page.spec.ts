import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesConfPage } from './mensajes-conf.page';

describe('MensajesConfPage', () => {
  let component: MensajesConfPage;
  let fixture: ComponentFixture<MensajesConfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajesConfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesConfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
