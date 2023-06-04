import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";

import {
  UserDropDownModal,
  DropDownModal,
  DropdownPosition,
} from "../../shared/interface";

@Component({
  tag: "cut-wc-common-dropdown",
  styleUrl: "./common-dropdown.scss",
  shadow: true,
})
export class CommonDropdown {
  @Prop() dropDownData: DropDownModal[];
  @Prop() showicon: boolean = true;
  @Prop() icon: string = "apps";
  @Prop() toplabel: string = "";
  @Prop() hideBottomLine: boolean = false;
  @Prop() highlightTopLabel: boolean = false;
  @Prop() highlightSelected: boolean = false;
  @Prop() dropdownShowFrom: DropdownPosition = "right";

  @Event({ bubbles: true, composed: true }) clicked: EventEmitter;

  clickHandler = (data: UserDropDownModal) => {
    this.clicked.emit(data);
  };

  render() {
    let listItem = null;
    if (this.dropDownData && this.dropDownData.length > 1) {
      listItem = this.dropDownData.map((single) => {
        let listHtml = (
          <li>
            <a
              class={
                this.highlightSelected && single.selected ? "highlight" : ""
              }
              href={single.link}
              target={single.newWindow ? "_blank" : "_self"}
            >
              {single.title}
            </a>
          </li>
        );
        if (single.emitEvent) {
          listHtml = (
            <li
              class={
                this.highlightSelected && single.selected ? "highlight" : ""
              }
              onClick={this.clickHandler.bind(this, single)}
            >
              {single.title}
            </li>
          );
        }

        return listHtml;
      });
    }

    return (
      <cut-wc-custom-dropdown
        hideBottomLine={this.hideBottomLine}
        dropdownShowFrom={this.dropdownShowFrom}
      >
        <div slot="header">
          <div
            class={
              this.highlightTopLabel ? "info-wrapper highlight" : "info-wrapper"
            }
          >
            {this.toplabel ? this.toplabel + " " : ""}
            {this.showicon ? <cut-wc-icon icon={this.icon}></cut-wc-icon> : ""}
          </div>
        </div>
        <div class="notification-wrapper">
          {listItem ? <ul class="list-item">{listItem}</ul> : null}
        </div>
      </cut-wc-custom-dropdown>
    );
  }
}
