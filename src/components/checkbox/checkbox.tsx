import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import { Fieldprops } from "../../shared/interface";
import { renderInputOutsideShadowRoot } from "../../utils/render-input-outside-shadow";

@Component({
  tag: "cut-wc-checkbox",
  styleUrl: "checkbox.scss",
  shadow: true,
})
export class CutCheckbox {
  @Prop() name: string;
  @Prop() guideline: string;
  @Prop({ reflect: true }) primary: boolean;
  @Prop({ reflect: true }) accent: boolean;
  @Prop({ reflect: true }) warn: boolean;
  @Prop({ reflect: true }) disabled: boolean;
  @Prop({ reflect: true }) checked: boolean = false;

  @Element() el!: HTMLInputElement;

  @Event({ bubbles: true, composed: true }) inputUpdate: EventEmitter<
    Fieldprops
  >;

  getReturnedData(event: Event): Fieldprops {
    return {
      name: this.name,
      guideline: this.guideline,
      checked: this.checked,
      disabled: this.disabled,
      event,
    };
  }

  clickHandler = (event: Event) => {
    this.checked = (event.target as HTMLInputElement).checked;
    this.inputUpdate.emit(this.getReturnedData(event));
  };

  render() {
    let className = "cut-checkbox";
    if (this.primary) {
      className = "cut-checkbox-primary";
    } else if (this.warn) {
      className = "cut-checkbox-warn";
    }
    let guideLine = null;
    if (this.guideline) {
      guideLine = <div class="guide-line">{this.guideline}</div>;
    }

    const { el, name } = this;
    renderInputOutsideShadowRoot(el, name, this.checked.toString());

    return (
      <label class={className}>
        <div class="label-container">
          <slot />
        </div>
        {guideLine}
        <input
          type="checkbox"
          name={this.name}
          checked={this.checked}
          disabled={this.disabled}
          onClick={this.clickHandler}
          id={this.name}
        />
        <span class="cut-checkmark"></span>
      </label>
    );
  }
}
