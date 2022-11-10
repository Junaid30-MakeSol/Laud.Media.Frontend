import { CurrencyModule } from './currency.module';

describe('MemberModule', () => {
  let adminModule: CurrencyModule;

  beforeEach(() => {
    adminModule = new CurrencyModule();
  });

  it('should create an instance', () => {
    expect(adminModule).toBeTruthy();
  });
});
