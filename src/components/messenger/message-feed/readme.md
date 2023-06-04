# cut-wc-message-feed



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description | Type              | Default     |
| ------------------ | -------------------- | ----------- | ----------------- | ----------- |
| `currentUserId`    | --                   |             | `String`          | `undefined` |
| `feedItems`        | --                   |             | `FeedItem[]`      | `undefined` |
| `filterData`       | --                   |             | `DropDownModal[]` | `undefined` |
| `noDataMsg`        | `no-data-msg`        |             | `string`          | `undefined` |
| `selectedId`       | `selected-id`        |             | `string`          | `undefined` |
| `showFeedLoader`   | `show-feed-loader`   |             | `boolean`         | `false`     |
| `showScrollLoader` | `show-scroll-loader` |             | `boolean`         | `false`     |


## Events

| Event          | Description | Type                         |
| -------------- | ----------- | ---------------------------- |
| `filterChange` |             | `CustomEvent<DropDownModal>` |
| `scrollEnded`  |             | `CustomEvent<boolean>`       |


## Dependencies

### Used by

 - [cut-wc-messenger](..)

### Depends on

- [cut-message-item](item)
- [cut-wc-loader](../../skeleton-loader)
- [cut-wc-common-dropdown](../../common-dropdown)

### Graph
```mermaid
graph TD;
  cut-wc-message-feed --> cut-message-item
  cut-wc-message-feed --> cut-wc-loader
  cut-wc-message-feed --> cut-wc-common-dropdown
  cut-wc-common-dropdown --> cut-wc-custom-dropdown
  cut-wc-common-dropdown --> cut-wc-icon
  cut-wc-messenger --> cut-wc-message-feed
  style cut-wc-message-feed fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
