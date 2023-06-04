import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "cut-wc-icon",
  styleUrl: "icon.scss",
})
export class CutIcon {
  @Prop() icon: string = null;
  render() {
    if (/^cut-/i.test(this.icon)) {
      return <i class={this.icon}></i>;
    } else {
      return <i class="material-icons">{this.icon}</i>;
    }
  }
}
