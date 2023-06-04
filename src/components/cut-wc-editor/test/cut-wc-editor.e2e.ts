import { newE2EPage } from '@stencil/core/testing';

describe('cut-wc-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cut-wc-editor></cut-wc-editor>');

    const element = await page.find('cut-wc-editor');
    expect(element).toHaveClass('hydrated');
  });
});
