# cut-wc-message

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute | Description | Type                        | Default                                                                                                                                                                             |
| ----------- | --------- | ----------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `job`       | `job`     |             | `any`                       | `undefined`                                                                                                                                                                         |
| `message`   | --        |             | `Message`                   | `{     title: "",     body: "",     greeting: "",     templateName: "",     sendSms: false,     template: { value: "test" },     isSaveAction: false,     enableSendSms: false   }` |
| `templates` | --        |             | `SelectDropDownDataModal[]` | `undefined`                                                                                                                                                                         |


## Events

| Event                   | Description | Type                      |
| ----------------------- | ----------- | ------------------------- |
| `deleteTemplate`        |             | `CustomEvent<EventModal>` |
| `getEditor`             |             | `CustomEvent<any>`        |
| `keyUpChanges`          |             | `CustomEvent<Message>`    |
| `saveTemplate`          |             | `CustomEvent<EventModal>` |
| `templateSelected`      |             | `CustomEvent<EventModal>` |
| `toggleSaveNewTemplate` |             | `CustomEvent<boolean>`    |
| `valueChanges`          |             | `CustomEvent<Message>`    |


## Dependencies

### Used by

 - [my-component](../../local-wrappers/my-component)

### Depends on

- [cut-wc-icon](../icon)
- [cut-wc-hint](../hint)
- [cut-wc-select](../select)
- [cut-wc-editor](../cut-wc-editor)
- [cut-wc-message-job](job)
- [cut-wc-checkbox](../checkbox)
- [cut-wc-link](../link)
- [cut-wc-input](../input)
- [cut-wc-button](../button)

### Graph
```mermaid
graph TD;
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
  cut-wc-message-job --> cut-wc-icon
  cut-wc-message-job --> cut-wc-button
  cut-wc-link --> cut-wc-icon
  cut-wc-input --> cut-wc-icon
  my-component --> cut-wc-message
  style cut-wc-message fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
