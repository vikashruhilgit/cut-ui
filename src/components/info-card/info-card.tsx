import { Component, h, Prop } from "@stencil/core";
import { CardDropDownDataModal } from "../../shared/interface";

@Component({
  tag: "cut-wc-info-card",
  styleUrl: "info-card.scss",
  shadow: true
})
export class CutInfoCard {
  @Prop({ reflect: true }) small: boolean;
  @Prop() positionTitle: string;
  @Prop() positionName: string;
  @Prop() address: string;
  @Prop() highlightText: string;
  @Prop() secondaryText: string;
  @Prop() firstPillText: string;
  @Prop() secondPillText: string;
  @Prop() icon: string = "desktop_windows";
  @Prop() showPills: boolean = false;
  @Prop() cardId: string;

  @Prop() dropdownData: CardDropDownDataModal[] = null;

  render() {
    return (
      <div class="wapper">
        <div class="icon-area">
          <cut-wc-icon icon={this.icon}></cut-wc-icon>
        </div>
        <div class="content-area">
          <div class="top-row">
            <div class="detail">
              {this.positionTitle ? (
                <span class="position-title">{this.positionTitle}</span>
              ) : null}
              {this.positionName ? (
                <span class="position-name">{this.positionName}</span>
              ) : null}
              {this.address ? (
                <span class="address">{this.address}</span>
              ) : null}
            </div>
            {this.dropdownData ? (
              <div class="dropdown">
                <cut-card-dropdown
                  dropdownData={this.dropdownData}
                  dropdown-id={this.cardId}
                ></cut-card-dropdown>
              </div>
            ) : null}
          </div>
          <div class="highlighted-row">
            {this.highlightText ? (
              <span class="highlighted-text1">{this.highlightText}</span>
            ) : null}
            {this.secondaryText ? (
              <span class="highlighted-text2">{this.secondaryText}</span>
            ) : null}
          </div>
          {this.showPills ? (
            <div class="pills-wrapper">
              {this.firstPillText ? (
                <cut-wc-pill gray>{this.firstPillText}</cut-wc-pill>
              ) : null}
              {this.secondPillText ? (
                <cut-wc-pill gray>{this.secondPillText}</cut-wc-pill>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
