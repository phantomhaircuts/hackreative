import { HackcreativePage } from './app.po';

describe('hackcreative App', function() {
  let page: HackcreativePage;

  beforeEach(() => {
    page = new HackcreativePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
