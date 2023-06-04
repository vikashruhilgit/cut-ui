import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "cut-wc-tooltip",
  styleUrl: "tooltip.scss",
  shadow: true
})
export class CutTooltip {
  @Prop() icon: string;
  @Prop({ reflect: true }) top: boolean;
  @Prop({ reflect: true }) left: boolean;
  @Prop({ reflect: true }) right: boolean;
  @Prop({ reflect: true }) bottom: boolean;

  marginAuto = { margin: '0 auto' };

  render() {
    return (
      <div class="wrapper">
        <cut-wc-icon icon={this.icon ? this.icon : "info"}></cut-wc-icon>
        <div class="text-wrapper">
          <div class="text" style={(this.top || this.bottom) ? this.marginAuto : {}}>
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
