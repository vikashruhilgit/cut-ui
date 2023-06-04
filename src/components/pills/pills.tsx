import { Component, h, Prop, EventEmitter, Event } from "@stencil/core";

@Component({
  tag: "cut-wc-pill",
  styleUrl: "./pills.scss",
  shadow: true
})
export class Cutpills {
  @Prop({ reflect: true }) primary: boolean;
  @Prop({ reflect: true }) gray: boolean;
  @Prop({ reflect: true }) icon: boolean;
  @Prop({ reflect: true }) iconName: string = "check";
  @Prop({ reflect: true }) interactive: boolean;
  @Prop({ reflect: true, mutable: true }) selected: boolean;
  @Prop({ reflect: true }) value: string;
  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true }) disabled: boolean;

  @Event({ bubbles: true, composed: true }) clicked: EventEmitter<boolean>;

  input: HTMLInputElement;

  clickHandler = () => {
    if (this.interactive) {
      this.selected = !this.input.checked;
    }
    this.clicked.emit(true);
  };

  render() {
    let iconContent = null;
    if (this.icon) {
      iconContent = <cut-wc-icon icon={this.iconName}></cut-wc-icon>;
    }

    return (
      <div class="pills" onClick={this.clickHandler}>
        {this.interactive ? null : iconContent}
        <span>
          <slot />
        </span>
        {this.interactive ? iconContent : null}
        {this.interactive ? (
          <input
            type="checkbox"
            name={this.name}
            checked={this.selected}
            value={this.value}
            ref={el => (this.input = el)}
          />
        ) : null}
      </div>
    );
  }
}
