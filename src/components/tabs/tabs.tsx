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
import { DropDownModal } from "../../shared/interface";

@Component({
  tag: "cut-wc-tabs",
  styleUrl: "./tabs.scss",
  shadow: true,
})
export class CutTabGroup {
  @Prop() selected: string;
  @Prop() maxTab: string = "4";
  @Prop() selectedTab: string;
  @State() dropDown: DropDownModal[] = null;
  @State() isDropdownSelected: boolean;

  @Element() el: HTMLElement;

  @Event({ bubbles: true, composed: true }) clicked: EventEmitter<any>;

  handleClickAndSelectParent(e: CustomEvent) {
    if (
      e.detail.origin === "tab-dropdown" &&
      (e.detail.uid || e.detail.label)
    ) {
      this.isDropdownSelected = false;
      this.el.parentElement
        .querySelector("cut-wc-tabs")
        .setAttribute(
          "selected-tab",
          e.detail.uid ? e.detail.uid : e.detail.label
        );
      this.isDropdownSelected = true;
    } else {
      this.isDropdownSelected = false;
    }
    this.hideTabParts();
    const currentTabId = e.detail.uid ? e.detail.uid : e.detail.label;
    this.showSeletedTad(currentTabId);
  }

  showSeletedTad(currentTabId: string) {
    const currentTab: HTMLElement = this.el.parentElement.querySelector(
      '[data-rel="' + currentTabId + '"]'
    );
    if (currentTab) {
      currentTab.style.display = "block";
    }
  }

  hideTabParts() {
    this.el.parentElement
      .querySelectorAll('[part="tabs"]')
      .forEach((n: HTMLElement) => {
        n.style.display = "none";
      });
  }

  @Listen("clicked")
  handleDropdownEvent(e: CustomEvent) {
    this.handleClickAndSelectParent(e);
  }

  componentWillLoad() {
    if (this.maxTab) {
      const dropdownData = [];
      this.el.parentElement.querySelectorAll("cut-wc-tab").forEach((n, i) => {
        if (i >= +this.maxTab) {
          n.remove();
          dropdownData.push({
            title: n.label,
            label: n.label,
            uid: n.uid,
            emitEvent: true,
            origin: "tab-dropdown",
          });
        }
      });
      this.dropDown = dropdownData.length > 0 ? dropdownData : null;
    }
    this.hideTabParts();
    const currentTabId = this.el.parentElement
      .querySelector("cut-wc-tabs")
      .getAttribute("selected-tab");
    this.showSeletedTad(currentTabId);
  }

  render() {
    return (
      <div class="wrapper">
        <slot></slot>
        {this.dropDown ? (
          <cut-wc-common-dropdown
            class={this.isDropdownSelected ? "selected" : ""}
            dropDownData={this.dropDown}
            icon={"more_horiz"}
            showicon={true}
            hideBottomLine={true}
            dropdownShowFrom={"right"}
            highlightSelected={true}
          ></cut-wc-common-dropdown>
        ) : null}
      </div>
    );
  }
}
