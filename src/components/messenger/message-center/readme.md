# cut-wc-message-center



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute             | Description | Type                                                                                                                               | Default     |
| -------------------- | --------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `actions`            | --                    |             | `DropDownModal[]`                                                                                                                  | `undefined` |
| `config`             | --                    |             | `ConfigModal`                                                                                                                      | `undefined` |
| `conversationLoader` | `conversation-loader` |             | `boolean`                                                                                                                          | `undefined` |
| `currentEvent`       | `current-event`       |             | `"actionUpdate" \| "feedItemClicked" \| "filterChange" \| "headerTitleClicked" \| "msgSubmit" \| "scrollEnded" \| "scrollUpEnded"` | `undefined` |
| `currentUserId`      | `current-user-id`     |             | `string`                                                                                                                           | `undefined` |
| `header`             | --                    |             | `ConversationHeaderModal`                                                                                                          | `undefined` |
| `inputData`          | --                    |             | `NewMessageInputModal`                                                                                                             | `undefined` |
| `msgs`               | --                    |             | `EventMessageModal[] \| JobMessageModal[] \| MsgDataModal[]`                                                                       | `undefined` |
| `newMsgLoader`       | `new-msg-loader`      |             | `boolean`                                                                                                                          | `undefined` |
| `selectedId`         | `selected-id`         |             | `string`                                                                                                                           | `undefined` |


## Dependencies

### Used by

 - [cut-wc-messenger](..)

### Depends on

- [cut-message-header](message-header)
- [cut-message-history](history)
- [cut-message-new](new-message)
- [cut-wc-message-empty](../message-empty)

### Graph
```mermaid
graph TD;
  cut-wc-message-center --> cut-message-header
  cut-wc-message-center --> cut-message-history
  cut-wc-message-center --> cut-message-new
  cut-wc-message-center --> cut-wc-message-empty
  cut-message-header --> cut-wc-common-dropdown
  cut-wc-common-dropdown --> cut-wc-custom-dropdown
  cut-wc-common-dropdown --> cut-wc-icon
  cut-message-history --> cut-history-msg
  cut-message-history --> cut-wc-loader
  cut-message-history --> cut-wc-message-empty
  cut-history-msg --> cut-wc-message-job
  cut-wc-message-job --> cut-wc-icon
  cut-wc-message-job --> cut-wc-button
  cut-message-new --> cut-wc-emoji
  cut-message-new --> cut-wc-icon
  cut-wc-emoji --> cut-wc-icon
  cut-wc-messenger --> cut-wc-message-center
  style cut-wc-message-center fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
