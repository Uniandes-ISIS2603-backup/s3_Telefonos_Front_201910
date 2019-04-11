import { TestBed } from '@angular/core/testing';

import { MetodoDePagoService } from './metodoDePago.service';

describe('MetodoDePagoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetodoDePagoService = TestBed.get(MetodoDePagoService);
    expect(service).toBeTruthy();
  });
});
