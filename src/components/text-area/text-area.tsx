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
  tag: "cut-wc-text-area",
  styleUrl: "text-area.scss",
  shadow: true,
})
export class CutTextArea {
  @Prop() value: string;
  @Prop() name: string;
  @Prop() label: string;
  @Prop() guideline: string;
  @Prop() require: boolean;
  @Prop() maxLength: string = "5000";

  @Prop({ reflect: true }) error: boolean;
  @Prop({ reflect: true }) success: boolean;
  @Prop({ reflect: true }) disabled: boolean = false;
  count: Number = 0;

  @Element() el!: HTMLTextAreaElement;

  @Event({ bubbles: true, composed: true }) inputUpdate: EventEmitter<
    Fieldprops
  >;
  @Event({ bubbles: true, composed: true }) keyUpChange: EventEmitter<
    Fieldprops
  >;
  @Event({ bubbles: true, composed: true }) keyDownChange: EventEmitter<
    Fieldprops
  >;

  getReturnedData(event: Event): Fieldprops {
    return {
      name: this.name,
      label: this.label,
      guideline: this.guideline,
      value: this.value,
      error: this.error,
      success: this.success,
      disabled: this.disabled,
      require: this.require,
      event,
    };
  }

  handleKeyUp = (event: Event) => {
    this.keyUpChange.emit(this.getReturnedData(event));
  };

  handleKeyDown = (event: Event) => {
    this.keyDownChange.emit(this.getReturnedData(event));
  };

  handleInput = (event: Event) => {
    let element = event.target as HTMLInputElement;
    this.count = element.value.length;
    if (element.scrollHeight > element.clientHeight) {
      element.style.height = element.scrollHeight + "px";
    }
    if (this.count > +this.maxLength) {
      element.value = this.value;
      this.error = true;
    } else {
      this.error = false;
      this.value = element.value;
    }
    if (this.count === 0) {
      element.style.height = "1.7rem";
    }
    this.inputUpdate.emit(this.getReturnedData(event));
  };

  render() {
    const { el, name, value } = this;
    renderInputOutsideShadowRoot(el, name, value);
    return (
      <div class="wrapper">
        <textarea
          class="input"
          name={this.name}
          placeholder={this.label}
          disabled={this.disabled}
          onInput={this.handleInput}
          data-content={this.label}
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyUp}
        >
          {this.value}
        </textarea>
        <label
          class="label"
          data-content={this.require ? "*" + this.label : this.label}
        >
          <span class="hidden--visually"></span>
        </label>
        <label
          class="label-top"
          data-content={this.require ? "*" + this.label : this.label}
        ></label>
        <span class="icon-error">
          <cut-wc-icon icon="error_outline"></cut-wc-icon>
        </span>
        <span class="icon-success">
          <cut-wc-icon icon="check"></cut-wc-icon>
        </span>
        <div class="guidance">
          <span class="text">{this.guideline}</span>
          <span class="count">
            {this.count}/{this.maxLength}
          </span>
        </div>
      </div>
    );
  }
}
