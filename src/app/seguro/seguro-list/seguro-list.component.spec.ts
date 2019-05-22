import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroListComponent } from './seguro-list.component';

describe('SeguroListComponent', () => {
  let component: SeguroListComponent;
  let fixture: ComponentFixture<SeguroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
