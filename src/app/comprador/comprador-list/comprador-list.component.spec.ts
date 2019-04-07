import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradorListComponent } from './comprador-list.component';

describe('CompradorListComponent', () => {
  let component: CompradorListComponent;
  let fixture: ComponentFixture<CompradorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompradorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
