import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroCreateComponent } from './seguro-create.component';

describe('SeguroCreateComponent', () => {
  let component: SeguroCreateComponent;
  let fixture: ComponentFixture<SeguroCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguroCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
