# cut-wc-tab-group



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type     | Default     |
| ------------- | -------------- | ----------- | -------- | ----------- |
| `maxTab`      | `max-tab`      |             | `string` | `"4"`       |
| `selected`    | `selected`     |             | `string` | `undefined` |
| `selectedTab` | `selected-tab` |             | `string` | `undefined` |


## Events

| Event     | Description | Type               |
| --------- | ----------- | ------------------ |
| `clicked` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [cut-wc-common-dropdown](../common-dropdown)

### Graph
```mermaid
graph TD;
  cut-wc-tabs --> cut-wc-common-dropdown
  cut-wc-common-dropdown --> cut-wc-custom-dropdown
  cut-wc-common-dropdown --> cut-wc-icon
  style cut-wc-tabs fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
