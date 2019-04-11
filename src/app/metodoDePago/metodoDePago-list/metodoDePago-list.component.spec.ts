import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoDePagoListComponent } from './metodoDePago-list.component';

describe('MetodoDePagoListComponent', () => {
  let component: MetodoDePagoListComponent;
  let fixture: ComponentFixture<MetodoDePagoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodoDePagoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodoDePagoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
