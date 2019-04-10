import { CarritoDeComprasModule } from './carrito-de-compras.module';

describe('CarritoDeComprasModule', () => {
  let carritoDeComprasModule: CarritoDeComprasModule;

  beforeEach(() => {
    carritoDeComprasModule = new CarritoDeComprasModule();
  });

  it('should create an instance', () => {
    expect(carritoDeComprasModule).toBeTruthy();
  });
});
