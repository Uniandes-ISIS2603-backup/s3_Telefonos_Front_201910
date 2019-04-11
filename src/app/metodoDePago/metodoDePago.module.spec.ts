import { MetodoDePagoModule } from './metodoDePago.module';

describe('FacturaModule', () => {
  let metodoDePagoModule: MetodoDePagoModule;

  beforeEach(() => {
    metodoDePagoModule = new MetodoDePagoModule();
  });

  it('should create an instance', () => {
    expect(metodoDePagoModule).toBeTruthy();
  });
});
