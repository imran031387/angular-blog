import { AngularDrupal8Page } from './app.po';

describe('angular-drupal8 App', () => {
  let page: AngularDrupal8Page;

  beforeEach(() => {
    page = new AngularDrupal8Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
