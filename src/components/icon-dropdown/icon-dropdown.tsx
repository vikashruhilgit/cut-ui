import { Component, h, Prop, EventEmitter, Event } from "@stencil/core";
import { mainLinkModal, IconListItemDataModel } from "../../shared/interface";

@Component({
  tag: "cut-wc-icon-dropdown",
  styleUrl: "./icon-dropdown.scss",
  shadow: true,
})
export class IconDropdown {
  @Prop() items: IconListItemDataModel[];
  @Prop() count: string;
  @Prop() mainLink: mainLinkModal;
  @Prop() icon: string;
  @Prop() heading: string;
  @Prop() origin: string;
  @Prop() topLabelColor: string = 'inherit';
  @Prop() topLabelSize: string = 'inherit';
  @Prop() mainLinkLabel: string = 'View All';

  @Event({ bubbles: true, composed: true }) clicked: EventEmitter<
    mainLinkModal
  >;
  clickHandlerForPage = (data: any) => {
    this.clicked.emit(data);
  };

  render() {
    let listItems = null;
    if (this.items && this.items.length > 0) {
      listItems = this.items.map((single) => {
        return (
          <cut-wc-header-list-item data={single}></cut-wc-header-list-item>
        );
      });
    }

    let mainLinkHtml = null;
    if (this.mainLink) {
      mainLinkHtml = this.mainLink.emitEvent ? (
        <span
          onClick={this.clickHandlerForPage.bind(this, this.mainLink)}
          class="all"
        >
          {this.mainLinkLabel}
        </span>
      ) : (
          <a
            href={this.mainLink.link}
            target={this.mainLink.newWindow ? "_blank" : "_self"}
          >
            <span class="all">{this.mainLinkLabel}</span>
          </a>
        );
    }

    const style = {
      color: this.topLabelColor,
      fontSize: this.topLabelSize
    }

    return (
      <cut-wc-custom-dropdown onDropdownClicked={e => this.clickHandlerForPage(e.detail.origin)}
        origin={this.origin ? this.origin : this.icon}>
        <div class="top" slot="header">
          <div class="icon-wrapper" style={style}>
            <cut-wc-icon icon={this.icon}></cut-wc-icon>
            {this.count ? (
              <div class="count">
                <span>
                  {this.count}
                </span>
              </div>
            ) : null}
          </div>
        </div>
        <div class="notification-wrapper">
          <div class="heading">
            <span>{this.heading}</span>
            {mainLinkHtml}
          </div>
          {listItems}
        </div>
      </cut-wc-custom-dropdown>
    );
  }
}
