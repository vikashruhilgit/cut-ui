# cut-wc-messenger



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute | Description | Type                 | Default     |
| --------------- | --------- | ----------- | -------------------- | ----------- |
| `messengerData` | --        |             | `MessengerDataModal` | `undefined` |


## Events

| Event             | Description | Type                              |
| ----------------- | ----------- | --------------------------------- |
| `messengerUpdate` |             | `CustomEvent<MessengerDataModal>` |


## Dependencies

### Used by

 - [my-component](../../local-wrappers/my-component)

### Depends on

- [cut-wc-message-empty](message-empty)
- [cut-wc-icon](../icon)
- [cut-wc-message-feed](message-feed)
- [cut-wc-message-center](message-center)

### Graph
```mermaid
graph TD;
  cut-wc-messenger --> cut-wc-message-empty
  cut-wc-messenger --> cut-wc-icon
  cut-wc-messenger --> cut-wc-message-feed
  cut-wc-messenger --> cut-wc-message-center
  cut-wc-message-feed --> cut-message-item
  cut-wc-message-feed --> cut-wc-loader
  cut-wc-message-feed --> cut-wc-common-dropdown
  cut-wc-common-dropdown --> cut-wc-custom-dropdown
  cut-wc-common-dropdown --> cut-wc-icon
  cut-wc-message-center --> cut-message-header
  cut-wc-message-center --> cut-message-history
  cut-wc-message-center --> cut-message-new
  cut-wc-message-center --> cut-wc-message-empty
  cut-message-header --> cut-wc-common-dropdown
  cut-message-history --> cut-history-msg
  cut-message-history --> cut-wc-loader
  cut-message-history --> cut-wc-message-empty
  cut-history-msg --> cut-wc-message-job
  cut-wc-message-job --> cut-wc-icon
  cut-wc-message-job --> cut-wc-button
  cut-message-new --> cut-wc-emoji
  cut-message-new --> cut-wc-icon
  cut-wc-emoji --> cut-wc-icon
  my-component --> cut-wc-messenger
  style cut-wc-messenger fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
