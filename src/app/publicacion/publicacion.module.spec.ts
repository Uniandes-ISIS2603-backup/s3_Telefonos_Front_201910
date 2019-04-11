import { PublicacionModule } from './publicacion.module';

describe('CompradorModule', () => {
  let publicacionModule: PublicacionModule;

  beforeEach(() => {
    publicacionModule = new PublicacionModule();
  });

  it('should create an instance', () => {
    expect(publicacionModule).toBeTruthy();
  });
});
