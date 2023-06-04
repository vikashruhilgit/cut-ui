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
import { Fieldprops, SelectDropDownDataModal } from "../../shared/interface";
import { renderInputOutsideShadowRoot } from "../../utils/render-input-outside-shadow";

@Component({
  tag: "cut-wc-select",
  styleUrl: "select.scss",
  shadow: true,
})
export class CutSelect {
  @Prop() name: string;
  @Prop() label: string;
  @Prop() guideline: string;
  @Prop() require: boolean;
  @Prop() icon: string = "keyboard_arrow_down";
  @Prop() dropDownData: SelectDropDownDataModal[];
  @Prop() enableAutoComplete: boolean = false;

  @Prop({ reflect: true }) multiple: boolean;
  @Prop({ reflect: true }) error: boolean;
  @Prop({ reflect: true }) success: boolean;
  @Prop({ reflect: true }) disabled: boolean;
  @Prop() displayValue: string;

  @State() showDropdown: boolean = false;
  @State() value: string;
  @State() filteredData: SelectDropDownDataModal[];

  @Element() el!: HTMLSelectElement;

  @Event({ bubbles: true, composed: true }) selectChange: EventEmitter<
    Fieldprops
  >;

  @Event({ bubbles: true, composed: true }) keyUpChanges: EventEmitter<string>;
  @Listen("click", { target: "document" }) handleDocClick() {
    this.showDropdown = false;
  }

  handleInputForAutoComplete = (event: Event) => {
    let inputVal = (event.target as HTMLInputElement).value;
    this.filteredData = this.dropDownData.filter((single) => {
      return (
        inputVal.toLowerCase() ===
        single.value.substr(0, inputVal.length).toLowerCase()
      );
    });
  };

  handleOnKeyUpChanges = (event: Event) => {
    let element = event.target as HTMLInputElement;
    this.keyUpChanges.emit(element.value);
  }

  getReturnedData(event: Event): Fieldprops {
    return {
      name: this.name,
      label: this.label,
      guideline: this.guideline,
      value: this.value,
      icon: this.icon,
      error: this.error,
      success: this.success,
      disabled: this.disabled,
      require: this.require,
      dropDownData: this.dropDownData,
      event,
    };
  }

  clearInput = (event: Event) => {
    event.stopPropagation();
    console.log("in clear");

    this.value = "";
    this.displayValue = "";
    const resetValues = this.dropDownData.map((single) => {
      return {
        ...single,
        selected: false,
      };
    });
    this.dropDownData = resetValues;
    this.selectChange.emit(this.getReturnedData(event));
  };

  componentWillLoad() {
    if (this.dropDownData.length > 0) {
      const res = this.dropDownData.filter((single) => {
        return single.selected;
      });
      if (res.length > 0) {
        this.displayValue = res.map((single) => single.title).join();
      }
    }
  }

  handleInput = (event: Event) => {
    event.stopPropagation();
    this.showDropdown = true;
  };

  getListSerlectValue(
    single: SelectDropDownDataModal,
    id: string,
    isMutiple: boolean
  ): boolean {
    return id === single.id && !single.selected
      ? true
      : id === single.id && single.selected
      ? false
      : isMutiple
      ? single.selected
      : false;
  }

  clickHandler = (id: string, event: Event) => {
    event.stopPropagation();
    const res = this.dropDownData.map((single) => {
      return {
        ...single,
        selected: this.multiple
          ? this.getListSerlectValue(single, id, true)
          : this.getListSerlectValue(single, id, false),
      };
    });

    this.dropDownData = res;
    const finValues = res.reduce(
      (res, single) => {
        if (single.selected) {
          res.display.push(single.title);
          res.actualVal.push(single.value);
        }
        return res;
      },
      {
        display: [],
        actualVal: [],
      }
    );

    this.value = finValues.actualVal.join();
    this.displayValue = finValues.display.join();
    if (!this.multiple) {
      this.showDropdown = false;
    }
    this.selectChange.emit(this.getReturnedData(event));
  };

  handleDropdownClick = (event: Event) => {
    event.stopPropagation();
  };

  handleDropdownOnArrowClick = (event: Event) => {
    event.stopPropagation();
    this.showDropdown= !this.showDropdown;
  };

  renderList() {
    return this.dropDownData.map((single) => {
      return (
        <li
          class={single.selected ? "select" : ""}
          onClick={this.clickHandler.bind(this, single.id)}
        >
          {single.title}
        </li>
      );
    });
  }

  renderDropdown() {
    return (
      <div
        onClick={this.handleDropdownClick.bind(this)}
        class={this.showDropdown ? "show drop-down" : "drop-down"}
      >
        <ul>{this.renderList()}</ul>
      </div>
    );
  }

  render() {
    const { el, name, value } = this;
    renderInputOutsideShadowRoot(el, name, value);
    return (
      <div class="wrapper">
        <input
          class="input"
          name={this.name}
          type="text"
          readonly={!this.enableAutoComplete}
          value={this.displayValue}
          placeholder={this.label}
          disabled={this.disabled}
          onClick={this.handleInput}
          onKeyUp={this.handleOnKeyUpChanges.bind(this)}
        />
        <label
          class="label"
          data-content={this.require ? "*" + this.label : this.label}
        >
          <span class="hidden--visually"></span>
        </label>
        <span class="icon">
          <div>
            {this.multiple ? (
              <cut-wc-icon
                onClick={this.clearInput}
                class="icon-user close-icon"
                icon="close"
              ></cut-wc-icon>
            ) : null}
            <cut-wc-icon class="error" icon="error"></cut-wc-icon>
            <cut-wc-icon class="success" icon="check"></cut-wc-icon>
            <cut-wc-icon icon={this.icon}
              onClick={this.handleDropdownOnArrowClick.bind(this)}
              class= "icon-user"
              >
            </cut-wc-icon>
          </div>
        </span>
        <span class="guidance">{this.guideline}</span>
        {this.dropDownData && this.dropDownData.length > 0
          ? this.renderDropdown()
          : null}
      </div>
    );
  }
}
