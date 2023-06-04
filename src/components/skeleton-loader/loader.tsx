import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "cut-wc-loader",
  styleUrl: "loader.scss",
  shadow: true,
})
export class CutLoader {
  styles: { [k: string]: any } = {};

  @Prop()
  count = 1;

  @Prop()
  classes: Array<string> = [];

  @Prop()
  styleOverrides: { [k: string]: any } = {};

  items: string[] = [];

  componentWillLoad() {
    this.styles = this.styleOverrides || {};
    this.items = new Array(this.count).fill("");
  }

  renderLoaderItems(items: string[]) {
    return items.map(() => (
      <span
        class={"cb-loader " + this.classes.join(" ")}
        style={this.styles}
      ></span>
    ));
  }

  render() {
    return this.renderLoaderItems(this.items);
  }
}
