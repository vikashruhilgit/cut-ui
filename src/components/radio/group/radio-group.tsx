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
import { Fieldprops } from "../../../shared/interface";
import { renderInputOutsideShadowRoot } from "../../../utils/render-input-outside-shadow";

@Component({
  tag: "cut-wc-radio-group",
  styleUrl: "radio-group.scss",
  shadow: true,
})
export class CutRadio {
  @Prop() name: string;
  @Prop() guideline: string;

  @State() value: string;
  @Element() el!: HTMLInputElement;

  @Event({ bubbles: true, composed: true }) radioChange: EventEmitter<
    Fieldprops
  >;

  @Listen("inputUpdate") handleInput(event: CustomEvent) {
    this.value = event.detail.value;
    this.radioChange.emit(event);
  }

  render() {
    const { el, name, value } = this;
    renderInputOutsideShadowRoot(el, name, value);

    return (
      <div>
        <slot />
        {this.guideline ? <div class="guide-line">{this.guideline}</div> : null}
      </div>
    );
  }
}
