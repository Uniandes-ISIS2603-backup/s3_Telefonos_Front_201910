import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroDetailComponent } from './seguro-detail.component';

describe('SeguroDetailComponent', () => {
  let component: SeguroDetailComponent;
  let fixture: ComponentFixture<SeguroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
