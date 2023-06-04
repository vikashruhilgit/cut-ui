import { Component, h, Prop, EventEmitter, Event } from "@stencil/core";

import { FavoriteItemModal, mainLinkModal } from "../../shared/interface";

@Component({
  tag: "cut-wc-favorite-dropdown",
  styleUrl: "./favorite-dropdown.scss",
  shadow: true
})
export class FavoriteDropdown {
  @Prop() favoriteItems: FavoriteItemModal[];
  @Prop() count: string = "10";
  @Prop() mainLink: mainLinkModal;
  @Prop() heading: string;

  @Event({ bubbles: true, composed: true }) clicked: EventEmitter<
    mainLinkModal
  >;

  clickHandlerForPage = () => {
    this.clicked.emit(this.mainLink);
  };

  render() {
    let listItems = null;
    if (this.favoriteItems && this.favoriteItems.length > 0) {
      listItems = this.favoriteItems.map(single => {
        return (
          <cut-wc-favourite-list-item
            favouriteData={single}
          ></cut-wc-favourite-list-item>
        );
      });
    }

    let mainLinkHtml = null;
    if (this.mainLink) {
      mainLinkHtml = this.mainLink.emitEvent ? (
        <span onClick={this.clickHandlerForPage} class="all">
          View All
        </span>
      ) : (
          <a
            href={this.mainLink.link}
            target={this.mainLink.newWindow ? "_blank" : "_self"}
          >
            <span class="all">View All</span>
          </a>
        );
    }

    return (
      <cut-wc-custom-dropdown origin="favorite">
        <div class="top" slot="header">
          <div
            class="icon-wrapper">
            <cut-wc-icon icon="favorite_border"></cut-wc-icon>
            <div class="count">
              <span>
                {this.count}
              </span>
            </div>
          </div>
        </div>
        <div class="notification-wrapper">
          <div class="heading">
            <span>{this.heading ? this.heading : 'Favourites'}</span>
            {mainLinkHtml}
          </div>
          {listItems}
        </div>
      </cut-wc-custom-dropdown>
    );
  }
}
