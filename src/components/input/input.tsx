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
  tag: "cut-wc-input",
  styleUrl: "input.scss",
  shadow: true,
})
export class CutInput {
  @Prop() name: string;
  @Prop() label: string;
  @Prop() guideline: string;
  @Prop() icon: string;
  @Prop() value: string;
  @Prop() type: string;
  @Prop() require: boolean;

  @Prop({ reflect: true }) error: boolean;
  @Prop({ reflect: true }) success: boolean;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) readonly: boolean = false;

  @Element() el!: HTMLInputElement;

  static formAssociated = true;

  @Event({ bubbles: true, composed: true }) inputUpdate: EventEmitter<
    Fieldprops
  >;
  @Event({ bubbles: true, composed: true }) keyUpChange: EventEmitter<
    Fieldprops
  >;
  @Event({ bubbles: true, composed: true }) keyDownChange: EventEmitter<
    Fieldprops
  >;
  @Event({ bubbles: true, composed: true }) inputChange: EventEmitter<
    Fieldprops
  >;

  handleInput = (event: Event) => {
    let element = event.target as HTMLInputElement;
    if (element.value.length > 0) {
      this.error = false;
    }
    this.value = element.value;
    this.inputUpdate.emit(this.getReturnedData(event));
  };

  handleKeyUp = (event: Event) => {
    this.keyUpChange.emit(this.getReturnedData(event));
  };

  handleKeyDown = (event: Event) => {
    this.keyDownChange.emit(this.getReturnedData(event));
  };

  handleChange = (event: Event) => {
    this.inputChange.emit(this.getReturnedData(event));
  };

  getReturnedData(event: Event): Fieldprops {
    return {
      name: this.name,
      label: this.label,
      guideline: this.guideline,
      value: this.value,
      icon: this.icon,
      type: this.type,
      error: this.error,
      readonly: this.readonly,
      success: this.success,
      disabled: this.disabled,
      require: this.require,
      event,
    };
  }

  render() {
    const { el, name, value } = this;
    renderInputOutsideShadowRoot(el, name, value);

    return (
      <div class="wrapper">
        <input
          class="input"
          name={this.name}
          type={this.type}
          value={this.value}
          placeholder={this.label}
          disabled={this.disabled}
          readonly={this.readonly}
          onInput={this.handleInput}
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyUp}
          onChange={this.handleChange}
        />
        <label
          class="label"
          data-content={this.require ? "*" + this.label : this.label}
        >
          <span class="hidden--visually"></span>
        </label>
        <span class="icon">
          <div>
            <cut-wc-icon class="error" icon="error"></cut-wc-icon>
            <cut-wc-icon class="success" icon="check"></cut-wc-icon>
            {this.icon ? (
              <cut-wc-icon class="icon-user" icon={this.icon}></cut-wc-icon>
            ) : null}
          </div>
        </span>
        <span class="guidance">{this.guideline}</span>
      </div>
    );
  }
}
