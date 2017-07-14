import { TattooParlourAppPage } from './app.po';

describe('tattoo-parlour-app App', () => {
  let page: TattooParlourAppPage;

  beforeEach(() => {
    page = new TattooParlourAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
