import { FilipinoClinikoPage } from './app.po';

describe('filipino-cliniko App', () => {
  let page: FilipinoClinikoPage;

  beforeEach(() => {
    page = new FilipinoClinikoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
