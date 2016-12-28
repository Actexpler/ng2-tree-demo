import { Ng2TreeDemoPage } from './app.po';

describe('ng2-tree-demo App', function() {
  let page: Ng2TreeDemoPage;

  beforeEach(() => {
    page = new Ng2TreeDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
