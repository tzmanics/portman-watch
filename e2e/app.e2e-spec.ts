import { PortmanWatchPage } from './app.po';

describe('portman-watch App', function() {
  let page: PortmanWatchPage;

  beforeEach(() => {
    page = new PortmanWatchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
