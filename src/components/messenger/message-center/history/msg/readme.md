# cut-history-msg



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description | Type                                                   | Default     |
| --------------- | ----------------- | ----------- | ------------------------------------------------------ | ----------- |
| `currentUserId` | `current-user-id` |             | `string`                                               | `undefined` |
| `msg`           | --                |             | `EventMessageModal \| JobMessageModal \| MsgDataModal` | `undefined` |


## Dependencies

### Used by

 - [cut-message-history](..)

### Depends on

- [cut-wc-message-job](../../../../message/job)

### Graph
```mermaid
graph TD;
  cut-history-msg --> cut-wc-message-job
  cut-wc-message-job --> cut-wc-icon
  cut-wc-message-job --> cut-wc-button
  cut-message-history --> cut-history-msg
  style cut-history-msg fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
