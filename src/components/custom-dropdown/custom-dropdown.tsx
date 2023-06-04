import {
  Component,
  h,
  Event,
  EventEmitter,
  Prop,
  Listen,
  State,
} from "@stencil/core";
import { EventModal, DropdownPosition } from "../../shared/interface";

@Component({
  tag: "cut-wc-custom-dropdown",
  styleUrl: "custom-dropdown.scss",
  shadow: true,
})
export class CutCustomDropdown {
  @Prop() origin: string = "custom-dropdown";
  @Prop({ reflect: true }) hideBottomLine: boolean = false;
  @Prop() dropdownShowFrom: DropdownPosition = "right";

  @Event({ bubbles: true, composed: true }) dropdownClicked: EventEmitter<
    EventModal
  >;

  @State() openDropdown: boolean = false;
  @State() isClicked: boolean = false;

  @Listen("click", { target: "document" })
  handleWindowClick() {
    let tempStatus = this.openDropdown;
    this.openDropdown = false;
    if (this.isClicked) {
      this.openDropdown = !tempStatus;
      this.isClicked = false;
    }
  }

  handleClick = () => {
    this.isClicked = true;
    this.dropdownClicked.emit({
      origin: this.origin,
    });
  };

  render() {
    const headingStyle = this.hideBottomLine
      ? {
          marginBottom: "10px",
        }
      : null;

    const dropdownStyle =
      this.dropdownShowFrom === "left"
        ? {
            left: "0",
            right: "auto",
          }
        : null;

    return (
      <div class="main">
        <p class={this.openDropdown ? "dropdown-open more" : "more"}>
          <div onClick={this.handleClick} class="heading" style={headingStyle}>
            <slot name="header"></slot>
          </div>
          <div class="dropdown-main" style={dropdownStyle}>
            <slot></slot>
          </div>
        </p>
      </div>
    );
  }
}
