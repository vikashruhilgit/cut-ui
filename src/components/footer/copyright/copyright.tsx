import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "cut-wc-copyright",
  styleUrl: "copyright.scss",
  shadow: true,
})
export class CutCopyright {
  @Prop() copyRight: string = "© 2019 CareerBuilder, LLC. All rights reserved.";

  render() {
    return (
      <div class="copyright">
        <p>{this.copyRight}</p>
      </div>
    );
  }
}
