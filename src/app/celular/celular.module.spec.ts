import { CelularModule } from './celular.module';

describe('CelularModule', () => {
  let celularModule: CelularModule;

  beforeEach(() => {
    celularModule = new CelularModule();
  });

  it('should create an instance', () => {
    expect(celularModule).toBeTruthy();
  });
});
