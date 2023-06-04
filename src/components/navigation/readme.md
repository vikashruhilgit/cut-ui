# cut-wc-navigation



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute                | Description | Type                | Default          |
| --------------------- | ------------------------ | ----------- | ------------------- | ---------------- |
| `bentoMap`            | --                       |             | `CbMapMenu`         | `undefined`      |
| `betaHeaderImagePath` | `beta-header-image-path` |             | `string`            | `LOGO_PATH_BETA` |
| `hasLogoutEvent`      | `has-logout-event`       |             | `boolean`           | `undefined`      |
| `headerImagePath`     | `header-image-path`      |             | `string`            | `LOGO_PATH`      |
| `isBeta`              | `is-beta`                |             | `boolean`           | `undefined`      |
| `navigationMap`       | --                       |             | `CbMapMenu`         | `undefined`      |
| `noDropShadow`        | `no-drop-shadow`         |             | `boolean`           | `undefined`      |
| `shoppingCart`        | --                       |             | `ShoppingCartModel` | `undefined`      |
| `userMap`             | --                       |             | `CbMapMenu`         | `undefined`      |


## Dependencies

### Used by

 - [nav-testing](../../local-wrappers/nav-testing)

### Depends on

- [cut-wc-navigation-dropdown](navigation-dropdown)
- [cut-wc-navigation-common-dropdown](common-dropdown)
- [cut-wc-shopping-cart](../shopping-cart)
- [cut-wc-navigation-user-dropdown](user-dropdown)

### Graph
```mermaid
graph TD;
  cut-wc-navigation --> cut-wc-navigation-dropdown
  cut-wc-navigation --> cut-wc-navigation-common-dropdown
  cut-wc-navigation --> cut-wc-shopping-cart
  cut-wc-navigation --> cut-wc-navigation-user-dropdown
  cut-wc-navigation-dropdown --> cut-wc-icon
  cut-wc-navigation-common-dropdown --> cut-wc-custom-dropdown
  cut-wc-navigation-common-dropdown --> cut-wc-icon
  cut-wc-shopping-cart --> cut-wc-icon
  cut-wc-navigation-user-dropdown --> cut-wc-custom-dropdown
  cut-wc-navigation-user-dropdown --> cut-wc-icon
  nav-testing --> cut-wc-navigation
  style cut-wc-navigation fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
