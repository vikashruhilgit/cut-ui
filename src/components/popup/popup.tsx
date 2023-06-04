import { Component, h, Prop, Element, ComponentWillLoad } from "@stencil/core";

@Component({
  tag: "cut-wc-popup",
  styleUrl: "popup.scss",
  shadow: true
})

export class CutPopup implements ComponentWillLoad {
  @Prop({ reflect: true }) open: boolean = false;
  @Prop({ reflect: true }) top: string = "center";
  @Prop({ reflect: true }) left: string = "center";
  @Prop({ reflect: true }) width: string = "auto";
  @Prop({ reflect: true }) zindex: string;
  @Prop({ reflect: true }) noshadow: boolean = false;

  @Element() el: HTMLElement;

  popupStyles = {};

  componentWillLoad() {
    let translateX = "0";
    let translateY = "0";

    if (this.top === "center") {
      this.top = "50%";
      translateX = "-50%";
    }

    if (this.left === "center") {
      this.left = "50%";
      translateY = "-50%";
    }

    this.popupStyles = {
      top: this.top,
      left: this.left,
      width: this.width,
      transform: `translate(${translateY}, ${translateX})`,
      zIndex: this.zindex ? this.zindex : null,
    };

    if (!this.noshadow) {
      this.el.shadowRoot.host.classList.add("shadow");
    }
  }

  closeBtnClickHandler = () => {
    this.el.shadowRoot.host.removeAttribute("open");
  }

  render() {

    return (
      <div class="wrapper" style={this.popupStyles}>
        <div class="close-button"><cut-wc-icon icon="close" onClick={this.closeBtnClickHandler.bind(this)}></cut-wc-icon></div>
        <slot />
      </div>
    );
  }
}
