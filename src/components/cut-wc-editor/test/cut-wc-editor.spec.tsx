import { newSpecPage } from '@stencil/core/testing';
import { CutWcEditor } from '../cut-wc-editor';

describe('cut-wc-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CutWcEditor],
      html: `<cut-wc-editor></cut-wc-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <cut-wc-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cut-wc-editor>
    `);
  });
});
