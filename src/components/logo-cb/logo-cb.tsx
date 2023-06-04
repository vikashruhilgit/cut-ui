import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "cut-wc-logo-cb",
  styleUrl: "logo-cb.scss",
  shadow: true,
})
export class CutLogoCB {
  @Prop() imagePath: string = "";
  @Prop() tagLine: string = "";

  render() {
    return (
      <div class="branding">
        {this.imagePath ? (
          <div class="logo">
            <img src={this.imagePath} alt="CB Logo" />
          </div>
        ) : null}
        {this.tagLine ? <p class="tag-line">{this.tagLine}</p> : null}
      </div>
    );
  }
}
