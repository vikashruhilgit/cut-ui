import { Component, h, Prop, Element, Method } from "@stencil/core";

@Component({
  tag: "cut-wc-hint",
  styleUrl: "hint.scss",
  shadow: true
})
export class CutHint {
  @Prop() icon: string = "info";
  @Prop({ reflect: true, mutable: true }) open: boolean;
  @Prop({ reflect: true }) top: boolean;
  @Prop({ reflect: true }) left: boolean;
  @Prop({ reflect: true }) right: boolean;
  @Prop({ reflect: true }) bottom: boolean;
  @Prop() heading: string;

  @Element() el: HTMLElement;

  closeHandler = () => {
    this.closeHint();
  };

  @Method() async closeHint() {
    this.el.removeAttribute("open");
  }
  @Method() async openHint() {
    this.el.setAttribute("open", "1");
  }

  render() {
    return (
      <div class="wrapper">
        <div class="header">
          <div class="title">
            <cut-wc-icon icon={this.icon}></cut-wc-icon>
            <span>{this.heading}</span>
          </div>
          <div class="close" onClick={this.closeHandler}>
            <cut-wc-icon icon="close"></cut-wc-icon>
          </div>
        </div>
        <div class="content">
          <slot />
        </div>
      </div>
    );
  }
}
