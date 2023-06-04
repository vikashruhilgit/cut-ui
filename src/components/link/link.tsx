import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "cut-wc-link",
  styleUrl: "link.scss",
  shadow: true
})
export class CutLink {
  @Prop({ reflect: true }) small: boolean;
  @Prop({ reflect: true }) disabled: boolean;
  @Prop({ reflect: true }) href: string;
  @Prop({ reflect: true }) target: string;
  /*
   * Here you can pass the metrial icon name.
   */
  @Prop({ reflect: true }) icon: string;

  render() {
    let renderHtml = (
      <a href={this.href} target={this.target}>
        <slot />
      </a>
    );
    if (this.disabled) {
      renderHtml = (
        <span>
          <slot />
        </span>
      );
    }
    return (
      <div class="wrapper">
        {renderHtml}
        {this.icon ? <cut-wc-icon icon={this.icon}></cut-wc-icon> : null}
      </div>
    );
  }
}
