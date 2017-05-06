import { PhWebPage } from './app.po';

describe('ph-web App', () => {
  let page: PhWebPage;

  beforeEach(() => {
    page = new PhWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
