import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "cut-wc-progress-bar",
  styleUrl: "progress-bar.scss",
  shadow: true
})
export class CutProgressBar {
  @Prop({ reflect: true }) percentage: string;
  @Prop() heading: string;
  @Prop() onlyBar: boolean = false;
  @Prop({ reflect: true }) primary: boolean;
  @Prop({ reflect: true }) warn: boolean;

  render() {
    return (
      <div class="wrapper">
        {!this.onlyBar ? (
          <div class="top-container">
            <p class="label">{this.heading}</p>
            <p class="percentage">{this.percentage}</p>
          </div>
        ) : null}

        <div class="bar-container">
          <div class="bar" style={{ width: this.percentage }}></div>
        </div>
      </div>
    );
  }
}
