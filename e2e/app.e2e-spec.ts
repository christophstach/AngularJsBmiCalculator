import { AngularJsBmiCalculatorPage } from './app.po';

describe('angular-js-bmi-calculator App', function() {
  let page: AngularJsBmiCalculatorPage;

  beforeEach(() => {
    page = new AngularJsBmiCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
