import { Component, h, Listen } from "@stencil/core";
import * as data from "./nav-testing-data";

@Component({
  tag: "nav-testing",
  styleUrl: "nav-testing.css",
  shadow: true,
})
export class MyComponent {
  @Listen("mouseEntered") clickHandler(event: CustomEvent) {
    console.log(event.detail);
  }

  render() {
    return (
      <div>
        <cut-wc-navigation
          navigationMap={data.navigationMap}
          userMap={data.userMap}
          bentoMap={data.bentoMap}
          no-drop-shadow
        ></cut-wc-navigation>
      </div>
    );
  }
}
