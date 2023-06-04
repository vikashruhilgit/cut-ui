import { Component, h, Prop, EventEmitter, Event } from "@stencil/core";
import { FavoriteItemModal } from "../../../shared/interface";

@Component({
  tag: "cut-wc-favourite-list-item",
  styleUrl: "./favourite-list-item.scss",
  shadow: true
})
export class FavouriteListItem {
  @Prop() favouriteData: FavoriteItemModal;

  @Event({ bubbles: true, composed: true }) clicked: EventEmitter<
    FavoriteItemModal
  >;

  clickHandler = (data: FavoriteItemModal) => {
    this.clicked.emit(data);
  };

  render() {
    return (
      <div
        class={
          this.favouriteData.unreadStatus ? "msg-wrapper unread" : "msg-wrapper"
        }
      >
        {this.favouriteData.date ? (
          <p class="msg-date">
            {this.favouriteData.dateLabel
              ? this.favouriteData.dateLabel
              : "Favorited"}
            : {this.favouriteData.date}
          </p>
        ) : null}
        <div class="msg">
          <div class="icon">
            {this.favouriteData.emitEventByIcon ? (
              <cut-wc-icon
                onClick={this.clickHandler.bind(this, {
                  ...this.favouriteData,
                  type: "fav-click"
                })}
                slot="header"
                icon="favorite"
              ></cut-wc-icon>
            ) : (
              <a href={this.favouriteData.link}>
                <cut-wc-icon slot="header" icon="favorite"></cut-wc-icon>
              </a>
            )}
          </div>
          <div class="msg-text">
            {this.favouriteData.title ? (
              <p class="highlight">
                {this.favouriteData.emitEvent ? (
                  <span
                    onClick={this.clickHandler.bind(this, this.favouriteData)}
                  >
                    {this.favouriteData.title}
                  </span>
                ) : (
                  <a href={this.favouriteData.link}>
                    <span>{this.favouriteData.title}</span>
                  </a>
                )}
              </p>
            ) : null}
            <p>
              {this.favouriteData.address ? (
                <span>{this.favouriteData.address}</span>
              ) : null}
              {this.favouriteData.phone ? (
                <span>{" | M: " + this.favouriteData.phone}</span>
              ) : null}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
