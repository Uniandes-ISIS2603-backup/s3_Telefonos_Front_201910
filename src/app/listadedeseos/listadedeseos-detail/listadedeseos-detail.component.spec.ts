import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadedeseosDetailComponent } from './listadedeseos-detail.component';

describe('ListadedeseosDetailComponent', () => {
  let component: ListadedeseosDetailComponent;
  let fixture: ComponentFixture<ListadedeseosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadedeseosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadedeseosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
