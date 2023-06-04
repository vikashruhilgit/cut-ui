import {
  Component,
  h,
  Prop,
  Element,
  Event,
  EventEmitter,
} from "@stencil/core";
import { Fieldprops } from "../../shared/interface";
import { renderInputOutsideShadowRoot } from "../../utils/render-input-outside-shadow";

@Component({
  tag: "cut-wc-toggle",
  styleUrl: "toggle.scss",
  shadow: true,
})
export class CutToggle {
  @Prop() name: string;
  @Prop() guideline: string;
  @Prop({ reflect: true }) primary: boolean;
  @Prop({ reflect: true }) accent: boolean;
  @Prop({ reflect: true }) warn: boolean;
  @Prop({ reflect: true }) disabled: boolean;
  @Prop({ reflect: true }) checked: boolean = false;
  @Prop({ reflect: true }) small: boolean;

  @Element() el!: HTMLInputElement;

  @Event({ bubbles: true, composed: true }) inputUpdate: EventEmitter<
    Fieldprops
  >;

  clickHandler = (event: Event) => {
    this.checked = (event.target as HTMLInputElement).checked;
    this.inputUpdate.emit(this.getReturnedData(event));
  };

  getReturnedData(event: Event): Fieldprops {
    return {
      name: this.name,
      guideline: this.guideline,
      checked: this.checked,
      disabled: this.disabled,
      event,
    };
  }

  render() {
    let className = "cut-toggle";
    if (this.primary) {
      className = "cut-toggle-primary";
    } else if (this.warn) {
      className = "cut-toggle-warn";
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
          value={this.checked.toString()}
          id={this.name}
        />
        <span class="cut-slider small"></span>
      </label>
    );
  }
}
