import { QuebraQuebraWebappPage } from './app.po';

describe('quebra-quebra-webapp App', () => {
  let page: QuebraQuebraWebappPage;

  beforeEach(() => {
    page = new QuebraQuebraWebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
