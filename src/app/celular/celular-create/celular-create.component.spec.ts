import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularCreateComponent } from './celular-create.component';

describe('CelularCreateComponent', () => {
  let component: CelularCreateComponent;
  let fixture: ComponentFixture<CelularCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelularCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelularCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
