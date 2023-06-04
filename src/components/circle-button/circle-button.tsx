import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "cut-wc-circle-button",
  styleUrl: "circle-button.scss",
  shadow: true
})
export class CutCircleButton {
  @Prop({ reflect: true }) primary: boolean;
  @Prop({ reflect: true }) accent: boolean;
  @Prop({ reflect: true }) big: boolean;
  /*
   * Here you can pass the metrial icon name.
   */
  @Prop({ reflect: true }) icon: string = "add";

  render() {
    return (
      <div class="wrapper">
        <cut-wc-icon icon={this.icon} ></cut-wc-icon>
      </div>
    );
  }
}
