import { TabletModule } from './tablet.module';

describe('TabletModule', () => {
  let tabletModule: TabletModule;

  beforeEach(() => {
    tabletModule = new TabletModule();
  });

  it('should create an instance', () => {
    expect(tabletModule).toBeTruthy();
  });
});
