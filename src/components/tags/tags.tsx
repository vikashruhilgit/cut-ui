import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "cut-wc-tag",
  styleUrl: "./tags.scss",
  shadow: true
})
export class CutTags {
  @Prop({ reflect: true }) primary: boolean;
  @Prop({ reflect: true }) accent: boolean;
  @Prop({ reflect: true }) warn: boolean;
  @Prop({ reflect: true }) close: boolean;
  render() {
    return (
      <div class="tags">
        <span>
          <slot></slot>
        </span>
      </div>
    );
  }
}
