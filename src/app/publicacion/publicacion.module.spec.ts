import { PublicacionModule } from './publicacion.module';

describe('PublicacionModule', () => {
  let publicacionModule: PublicacionModule;

  beforeEach(() => {
    publicacionModule = new PublicacionModule();
  });

  it('should create an instance', () => {
    expect(publicacionModule).toBeTruthy();
  });
});
