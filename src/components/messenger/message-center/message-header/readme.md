# cut-message-header



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type                      | Default     |
| --------- | --------- | ----------- | ------------------------- | ----------- |
| `actions` | --        |             | `DropDownModal[]`         | `undefined` |
| `config`  | --        |             | `ConfigModal`             | `undefined` |
| `header`  | --        |             | `ConversationHeaderModal` | `undefined` |


## Events

| Event                | Description | Type                         |
| -------------------- | ----------- | ---------------------------- |
| `actionUpdate`       |             | `CustomEvent<DropDownModal>` |
| `headerTitleClicked` |             | `CustomEvent<boolean>`       |


## Dependencies

### Used by

 - [cut-wc-message-center](..)

### Depends on

- [cut-wc-common-dropdown](../../../common-dropdown)

### Graph
```mermaid
graph TD;
  cut-message-header --> cut-wc-common-dropdown
  cut-wc-common-dropdown --> cut-wc-custom-dropdown
  cut-wc-common-dropdown --> cut-wc-icon
  cut-wc-message-center --> cut-message-header
  style cut-message-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
