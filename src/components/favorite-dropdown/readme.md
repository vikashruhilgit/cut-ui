# cut-wc-favorite-dropdown



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute | Description | Type                  | Default     |
| --------------- | --------- | ----------- | --------------------- | ----------- |
| `count`         | `count`   |             | `string`              | `"10"`      |
| `favoriteItems` | --        |             | `FavoriteItemModal[]` | `undefined` |
| `heading`       | `heading` |             | `string`              | `undefined` |
| `mainLink`      | --        |             | `mainLinkModal`       | `undefined` |


## Events

| Event     | Description | Type                         |
| --------- | ----------- | ---------------------------- |
| `clicked` |             | `CustomEvent<mainLinkModal>` |


## Dependencies

### Used by

 - [cut-wc-header](../header)

### Depends on

- [cut-wc-favourite-list-item](../list/favourite-list-item)
- [cut-wc-custom-dropdown](../custom-dropdown)
- [cut-wc-icon](../icon)

### Graph
```mermaid
graph TD;
  cut-wc-favorite-dropdown --> cut-wc-favourite-list-item
  cut-wc-favorite-dropdown --> cut-wc-custom-dropdown
  cut-wc-favorite-dropdown --> cut-wc-icon
  cut-wc-favourite-list-item --> cut-wc-icon
  cut-wc-header --> cut-wc-favorite-dropdown
  style cut-wc-favorite-dropdown fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
