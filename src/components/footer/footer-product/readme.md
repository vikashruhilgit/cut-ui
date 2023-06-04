# cut-wc-product-footer



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type              | Default     |
| --------------- | ---------------- | ----------- | ----------------- | ----------- |
| `footerData`    | --               |             | `FooterDataModal` | `undefined` |
| `hideCopyright` | `hide-copyright` |             | `boolean`         | `false`     |


## Events

| Event     | Description | Type               |
| --------- | ----------- | ------------------ |
| `clicked` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [cut-wc-logo-cb](../../logo-cb)
- [cut-wc-common-dropdown](../../common-dropdown)
- [cut-wc-copyright](../copyright)
- [cut-wc-icon](../../icon)

### Graph
```mermaid
graph TD;
  cut-wc-product-footer --> cut-wc-logo-cb
  cut-wc-product-footer --> cut-wc-common-dropdown
  cut-wc-product-footer --> cut-wc-copyright
  cut-wc-product-footer --> cut-wc-icon
  cut-wc-common-dropdown --> cut-wc-custom-dropdown
  cut-wc-common-dropdown --> cut-wc-icon
  style cut-wc-product-footer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
