import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import { CardDropDownDataModal } from "../../shared/interface";

@Component({
  tag: "cut-wc-card",
  styleUrl: "card.scss",
  shadow: true
})
export class CutCard {
  @Prop() heading: string;
  @Prop() subheading: string;
  @Prop() dropdownData: CardDropDownDataModal[] = null;
  @Prop() actionButtons: boolean = false;
  @Prop() ctaText: string = "Cancel";
  @Prop() secondaCtaText: string = "Secondary";
  @Prop() cardId: any = null;
  @Prop() imageUrl: any;
  @Prop() imageOnTop: boolean = false;
  @Prop() onlyImage: boolean = false;
  @Prop() imageCaption: string;

  @Event() isClicked: EventEmitter;

  ctaClickHandler = (type: string) => {
    this.isClicked.emit({ type: type, id: this.cardId });
  };

  render() {
    let actionMenu = null;

    if (this.dropdownData) {
      actionMenu = (
        <cut-card-dropdown dropdownData={this.dropdownData}></cut-card-dropdown>
      );
    }
    let actionButtons = null;
    if (this.actionButtons) {
      actionButtons = (
        <div class="action-buttons">
          <cut-wc-button
            ghost
            positive
            size="medium"
            onClick={this.ctaClickHandler.bind(this, "cancel")}
          >
            {this.ctaText}
          </cut-wc-button>
          <cut-wc-button
            accent
            size="medium"
            onClick={this.ctaClickHandler.bind(this, "action")}
          >
            {this.secondaCtaText}
          </cut-wc-button>
        </div>
      );
    }
    let imageToDisplay = null;
    if (this.imageUrl) {
      imageToDisplay = (
        <div class="image-box">
          <img src={this.imageUrl} alt="Image" />
          {this.imageCaption ? (
            <p class="image-caption">{this.imageCaption}</p>
          ) : null}
        </div>
      );
    }

    if (this.onlyImage) {
      return (
        <div class="wapper-main">
          <div class="wapper">{imageToDisplay}</div>
        </div>
      );
    }

    return (
      <div class="wapper-main">
        {this.imageOnTop ? imageToDisplay : null}
        <div class="wapper">
          {this.heading ? (
            <div class="heading">
              <div class="title">{this.heading}</div>
              <div>{actionMenu}</div>
            </div>
          ) : null}
          {!this.imageOnTop ? imageToDisplay : null}
          {this.subheading ? (
            <div class="subheading">{this.subheading}</div>
          ) : null}
          <div class="content">
            <slot></slot>
          </div>
          {actionButtons}
        </div>
      </div>
    );
  }
}
