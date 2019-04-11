import { ProveeedorModule } from './proveeedor.module';

describe('ProveeedorModule', () => {
  let proveeedorModule: ProveeedorModule;

  beforeEach(() => {
    proveeedorModule = new ProveeedorModule();
  });

  it('should create an instance', () => {
    expect(proveeedorModule).toBeTruthy();
  });
});
