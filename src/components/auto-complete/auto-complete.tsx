import { Component, h, Prop, State } from "@stencil/core";
import { SelectDropDownDataModal } from "../../shared/interface";

@Component({
  tag: "cut-wc-auto-complete",
  styleUrl: "auto-complete.scss",
  shadow: true,
})
export class CutAutoComplete {
  @Prop({ reflect: true, mutable: true }) value: string;
  @Prop() name: string;
  @Prop() label: string;
  @Prop() guideline: string;

  @Prop({ reflect: true }) error: boolean;
  @Prop({ reflect: true }) success: boolean;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) icon: boolean = true;
  @Prop() iconName: string = "keyboard_arrow_down";
  @Prop() dropDownData: SelectDropDownDataModal[] = null;

  @State() filteredData: SelectDropDownDataModal[] = null;

  handleInput = (event: Event) => {
    let inputVal = (event.target as HTMLInputElement).value;
    this.filteredData = this.dropDownData.filter((single) => {
      return (
        inputVal.toLowerCase() ===
        single.value.substr(0, inputVal.length).toLowerCase()
      );
    });
  };

  clickHandler = (value: string) => {
    this.value = value;
  };

  render() {
    let iconHtml = null;
    if (this.icon) {
      iconHtml = (
        <cut-wc-icon class="icon-user" icon={this.iconName}></cut-wc-icon>
      );
    }
    let dropDownHtml = null;
    if (this.filteredData && this.filteredData.length > 0) {
      const listData = this.filteredData.map((single) => {
        return (
          <li onClick={() => this.clickHandler(single.value)}>
            {single.title}
          </li>
        );
      });

      dropDownHtml = (
        <div class="drop-down">
          <ul>{listData}</ul>
        </div>
      );
    }
    return (
      <div class="wrapper">
        <input
          class="input"
          name={this.name}
          type="text"
          value={this.value}
          placeholder={this.label}
          disabled={this.disabled}
          onInput={this.handleInput}
        />
        <label class="label" data-content={this.label}>
          <span class="hidden--visually"></span>
        </label>
        <span class="icon">
          <div>
            <cut-wc-icon class="error" icon="error"></cut-wc-icon>
            <cut-wc-icon class="success" icon="check"></cut-wc-icon>
            {iconHtml}
          </div>
        </span>
        <span class="guidance">{this.guideline}</span>
        {dropDownHtml}
      </div>
    );
  }
}
