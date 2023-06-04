import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';


export const config: Config = {
  namespace: 'cut',
  buildEs5: 'prod',
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    shadowDomShim: true,
    safari10: true,
    scriptDataOpts: true,
    appendChildSlotFix: false,
    cloneNodeFix: false,
    slotChildNodesFix: true,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'dist-custom-elements-bundle'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ], plugins: [
    sass({
      injectGlobalPaths: [
        'src/assets/stylesheets/cut-core.scss',
      ]
    })
  ]
};
