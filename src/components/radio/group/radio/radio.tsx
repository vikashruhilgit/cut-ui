import { Component, Event, EventEmitter, h, Prop } from "@stencil/core";
import { Fieldprops } from "../../../../shared/interface";

@Component({
  tag: "cut-wc-radio",
  styleUrl: "radio.scss",
})
export class CutRadio {
  @Prop() name: string;
  @Prop({ reflect: true }) primary: boolean;
  @Prop({ reflect: true }) accent: boolean;
  @Prop({ reflect: true }) warn: boolean;
  @Prop({ reflect: true }) disabled: boolean;
  @Prop({ reflect: true }) value: string;
  @Prop({ reflect: true, mutable: true }) checked: boolean = false;
  @Prop() guideline: string;

  @Event({ bubbles: true, composed: true }) inputUpdate: EventEmitter<
    Fieldprops
  >;

  getReturnedData(event: Event): Fieldprops {
    return {
      name: this.name,
      guideline: this.guideline,
      checked: this.checked,
      disabled: this.disabled,
      value: this.checked ? (this.value ? this.value : this.name) : null,
      event,
    };
  }

  clickHandler = (event: Event) => {
    this.checked = (event.target as HTMLInputElement).checked;
    this.inputUpdate.emit(this.getReturnedData(event));
  };

  render() {
    let className = "cut-radio";
    if (this.primary) {
      className = "cut-radio-primary";
    } else if (this.warn) {
      className = "cut-radio-warn";
    }
    let guideLine = null;
    if (this.guideline) {
      guideLine = <div class="guide-line">{this.guideline}</div>;
    }

    return (
      <label class={className}>
        <div class="label-container">
          <slot />
        </div>
        {guideLine}
        <input
          type="radio"
          name={this.name}
          checked={this.checked}
          disabled={this.disabled}
          onChange={this.clickHandler}
          id={this.name}
        />
        <span class="cut-checkmark"></span>
      </label>
    );
  }
}
