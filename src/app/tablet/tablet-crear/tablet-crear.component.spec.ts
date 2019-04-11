import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletCrearComponent } from './tablet-crear.component';

describe('TabletCrearComponent', () => {
  let component: TabletCrearComponent;
  let fixture: ComponentFixture<TabletCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
