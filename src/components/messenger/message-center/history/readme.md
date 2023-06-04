# cut-message-history



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute             | Description | Type                                                                                                                               | Default     |
| -------------------- | --------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `conversationLoader` | `conversation-loader` |             | `boolean`                                                                                                                          | `false`     |
| `currentEvent`       | `current-event`       |             | `"actionUpdate" \| "feedItemClicked" \| "filterChange" \| "headerTitleClicked" \| "msgSubmit" \| "scrollEnded" \| "scrollUpEnded"` | `undefined` |
| `currentUserId`      | `current-user-id`     |             | `string`                                                                                                                           | `undefined` |
| `msgs`               | --                    |             | `MsgDataModal[]`                                                                                                                   | `undefined` |
| `newMsgLoader`       | `new-msg-loader`      |             | `boolean`                                                                                                                          | `false`     |


## Events

| Event           | Description | Type                   |
| --------------- | ----------- | ---------------------- |
| `scrollUpEnded` |             | `CustomEvent<boolean>` |


## Dependencies

### Used by

 - [cut-wc-message-center](..)

### Depends on

- [cut-history-msg](msg)
- [cut-wc-loader](../../../skeleton-loader)
- [cut-wc-message-empty](../../message-empty)

### Graph
```mermaid
graph TD;
  cut-message-history --> cut-history-msg
  cut-message-history --> cut-wc-loader
  cut-message-history --> cut-wc-message-empty
  cut-history-msg --> cut-wc-message-job
  cut-wc-message-job --> cut-wc-icon
  cut-wc-message-job --> cut-wc-button
  cut-wc-message-center --> cut-message-history
  style cut-message-history fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
