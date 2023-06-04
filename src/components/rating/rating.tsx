import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "cut-wc-rating",
  styleUrl: "rating.scss",
  shadow: true
})
export class CutRating {
  @Prop() hideLabel: boolean;
  @Prop() match: "good" | "great" | "close";

  render() {
    const matchHtml = [
      <span class="dot active"></span>,
      <span
        class={
          this.match === "good" || this.match === "great" ? "active dot" : "dot"
        }
      ></span>,
      <span class={this.match === "great" ? "active dot" : "dot"}></span>
    ];

    return (
      <div class="wrapper">
        <div class="indicator-wrapper">{matchHtml}</div>
        {this.hideLabel ? null : (
          <div class="text-wrapper">
            <span>
              <slot></slot>
            </span>
          </div>
        )}
      </div>
    );
  }
}
