# my-component

<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [cut-wc-messenger](../../components/messenger)
- [cut-wc-message](../../components/message)

### Graph
```mermaid
graph TD;
  my-component --> cut-wc-messenger
  my-component --> cut-wc-message
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
  cut-wc-message --> cut-wc-icon
  cut-wc-message --> cut-wc-hint
  cut-wc-message --> cut-wc-select
  cut-wc-message --> cut-wc-editor
  cut-wc-message --> cut-wc-message-job
  cut-wc-message --> cut-wc-checkbox
  cut-wc-message --> cut-wc-link
  cut-wc-message --> cut-wc-input
  cut-wc-message --> cut-wc-button
  cut-wc-hint --> cut-wc-icon
  cut-wc-select --> cut-wc-icon
  cut-wc-link --> cut-wc-icon
  cut-wc-input --> cut-wc-icon
  style my-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
