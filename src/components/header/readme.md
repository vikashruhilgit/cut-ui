# cut-wc-header



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description | Type                    | Default     |
| ------------------ | ------------------- | ----------- | ----------------------- | ----------- |
| `IconListDropdown` | --                  |             | `IconListDataModel[]`   | `undefined` |
| `commonDropdown`   | --                  |             | `commonDropdownModal[]` | `undefined` |
| `favoriteDropdown` | --                  |             | `FavoriteDropdownModal` | `undefined` |
| `headerImagePath`  | `header-image-path` |             | `string`                | `undefined` |
| `navigation`       | --                  |             | `DropDownDataModal`     | `undefined` |
| `noDropShadow`     | `no-drop-shadow`    |             | `boolean`               | `undefined` |
| `shoppingCart`     | --                  |             | `ShoppingCartModel`     | `undefined` |
| `userDropDown`     | --                  |             | `UserDropDownModal[]`   | `undefined` |
| `userInfo`         | --                  |             | `UserInfoModal`         | `undefined` |


## Events

| Event     | Description | Type                      |
| --------- | ----------- | ------------------------- |
| `clicked` |             | `CustomEvent<EventModal>` |


## Dependencies

### Depends on

- [cut-wc-common-dropdown](../common-dropdown)
- [cut-wc-icon-dropdown](../icon-dropdown)
- [cut-wc-dropdown](../dropdown)
- [cut-wc-shopping-cart](../shopping-cart)
- [cut-wc-favorite-dropdown](../favorite-dropdown)
- [cut-wc-user-dropdown](../user-dropdown)

### Graph
```mermaid
graph TD;
  cut-wc-header --> cut-wc-common-dropdown
  cut-wc-header --> cut-wc-icon-dropdown
  cut-wc-header --> cut-wc-dropdown
  cut-wc-header --> cut-wc-shopping-cart
  cut-wc-header --> cut-wc-favorite-dropdown
  cut-wc-header --> cut-wc-user-dropdown
  cut-wc-common-dropdown --> cut-wc-custom-dropdown
  cut-wc-common-dropdown --> cut-wc-icon
  cut-wc-icon-dropdown --> cut-wc-header-list-item
  cut-wc-icon-dropdown --> cut-wc-custom-dropdown
  cut-wc-icon-dropdown --> cut-wc-icon
  cut-wc-header-list-item --> cut-wc-icon
  cut-wc-dropdown --> cut-wc-icon
  cut-wc-shopping-cart --> cut-wc-icon
  cut-wc-favorite-dropdown --> cut-wc-favourite-list-item
  cut-wc-favorite-dropdown --> cut-wc-custom-dropdown
  cut-wc-favorite-dropdown --> cut-wc-icon
  cut-wc-favourite-list-item --> cut-wc-icon
  cut-wc-user-dropdown --> cut-wc-custom-dropdown
  cut-wc-user-dropdown --> cut-wc-icon
  style cut-wc-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
