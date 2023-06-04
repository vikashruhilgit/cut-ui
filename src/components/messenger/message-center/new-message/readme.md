# cut-message-new



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute | Description | Type                   | Default                 |
| ----------- | --------- | ----------- | ---------------------- | ----------------------- |
| `config`    | --        |             | `ConfigModal`          | `undefined`             |
| `inputData` | --        |             | `NewMessageInputModal` | `getDefaultInputData()` |


## Events

| Event       | Description | Type                   |
| ----------- | ----------- | ---------------------- |
| `msgSubmit` |             | `CustomEvent<boolean>` |


## Dependencies

### Used by

 - [cut-wc-message-center](..)

### Depends on

- [cut-wc-emoji](../../../emoji)
- [cut-wc-icon](../../../icon)

### Graph
```mermaid
graph TD;
  cut-message-new --> cut-wc-emoji
  cut-message-new --> cut-wc-icon
  cut-wc-emoji --> cut-wc-icon
  cut-wc-message-center --> cut-message-new
  style cut-message-new fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
