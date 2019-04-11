import { ListadedeseosModule } from './listadedeseos.module';

describe('ListadedeseosModule', () => {
  let listadedeseosModule: ListadedeseosModule;

  beforeEach(() => {
    listadedeseosModule = new ListadedeseosModule();
  });

  it('should create an instance', () => {
    expect(listadedeseosModule).toBeTruthy();
  });
});
