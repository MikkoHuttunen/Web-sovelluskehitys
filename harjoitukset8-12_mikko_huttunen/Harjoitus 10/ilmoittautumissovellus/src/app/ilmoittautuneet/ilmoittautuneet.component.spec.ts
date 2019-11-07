import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlmoittautuneetComponent } from './ilmoittautuneet.component';

describe('IlmoittautuneetComponent', () => {
  let component: IlmoittautuneetComponent;
  let fixture: ComponentFixture<IlmoittautuneetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlmoittautuneetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlmoittautuneetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
