# cut-wc-emoji



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description | Type     | Default     |
| --------------- | ----------------- | ----------- | -------- | ----------- |
| `labelColor`    | `label-color`     |             | `string` | `undefined` |
| `labelFontSize` | `label-font-size` |             | `string` | `undefined` |


## Events

| Event         | Description | Type                               |
| ------------- | ----------- | ---------------------------------- |
| `emojiPicked` |             | `CustomEvent<{ emoji?: string; }>` |


## Dependencies

### Used by

 - [cut-message-new](../messenger/message-center/new-message)

### Depends on

- [cut-wc-icon](../icon)

### Graph
```mermaid
graph TD;
  cut-wc-emoji --> cut-wc-icon
  cut-message-new --> cut-wc-emoji
  style cut-wc-emoji fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
