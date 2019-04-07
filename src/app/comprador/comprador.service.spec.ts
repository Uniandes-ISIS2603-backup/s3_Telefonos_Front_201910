import { TestBed } from '@angular/core/testing';

import { CompradorService } from './comprador.service';

describe('CompradorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompradorService = TestBed.get(CompradorService);
    expect(service).toBeTruthy();
  });
});
