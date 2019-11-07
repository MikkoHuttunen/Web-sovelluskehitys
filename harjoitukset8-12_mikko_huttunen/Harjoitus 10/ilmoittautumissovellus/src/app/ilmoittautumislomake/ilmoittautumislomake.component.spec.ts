import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlmoittautumislomakeComponent } from './ilmoittautumislomake.component';

describe('IlmoittautumislomakeComponent', () => {
  let component: IlmoittautumislomakeComponent;
  let fixture: ComponentFixture<IlmoittautumislomakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlmoittautumislomakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlmoittautumislomakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
