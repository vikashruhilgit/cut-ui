import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "cut-wc-button",
  styleUrl: "button.scss",
  shadow: true
})
export class CutButton {
  /**
   * Describe the primary button type
   */
  @Prop({ reflect: true }) primary: boolean = null;

  /**
   * Describe the accent button type
   */
  @Prop({ reflect: true }) accent: boolean = null;

  /**
   * Describe the accent button type
   */
  @Prop({ reflect: true }) warn: boolean = null;

  /**
   * Describe the tertiary button type
   */
  @Prop({ reflect: true }) tertiary: boolean = null;

  /**
   * Gives the option to change the size of button.
   */
  @Prop({ reflect: true }) size: "medium" | "large" | "small" = "medium";

  /**
   * Gives you the option to disabled the button
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Describe the ghost button type
   */
  @Prop({ reflect: true }) ghost: boolean = false;

  /**
   * Describe the Ghost type
   */
  @Prop({ reflect: true }) positive: boolean = false;
  /**
   * Describe the type of button. e.g. Submit
   */
  @Prop({ reflect: true }) type: string;

  render() {
    let className = [];
    if (this.primary) {
      className.push("cut-button-primary");
    } else if (this.accent) {
      className.push("cut-button-accent");
    } else if (this.warn) {
      className.push("cut-button-warn");
    } else if (this.tertiary) {
      className.push("cut-button-tertiary");
    } else {
      className.push("cut-button-accent");
    }
    if (this.size) {
      className.push("cut-button-" + this.size);
    }

    return (
      <button class={className.join(" ")} type={this.type}>
        <slot />
      </button>
    );
  }
}
