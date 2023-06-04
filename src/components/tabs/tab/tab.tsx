import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Listen,
  Prop,
  State,
} from "@stencil/core";

@Component({
  tag: "cut-wc-tab",
  styleUrl: "./tab.scss",
  shadow: true,
})
export class CutTab {
  @Prop() label: string;
  @Prop() uid: string;

  @State() isSelected: boolean;
  @Event({ bubbles: true, composed: true }) clicked: EventEmitter<any>;

  @Element() el: HTMLElement;

  @Listen("click", { target: "body" })
  handleClickBody() {
    this.handleSelect();
  }

  handleClick = () => {
    this.clicked.emit({ id: this.uid, label: this.label, origin: "tab" });
    this.el.parentElement.setAttribute(
      "selected-tab",
      this.uid ? this.uid : this.label
    );
  };

  handleSelect() {
    this.isSelected = false;
    const selectedVal = this.el.parentElement
      ? this.el.parentElement.getAttribute("selected-tab")
      : null;
    if (
      selectedVal &&
      (selectedVal === this.label || selectedVal === this.uid)
    ) {
      this.isSelected = true;
    }
  }

  componentWillRender() {
    this.handleSelect();
  }

  render() {
    return (
      <div>
        <p onClick={this.handleClick.bind(this)} title={this.label}>
          <span class={this.isSelected ? "selected" : ""}>{this.label}</span>
        </p>
      </div>
    );
  }
}
