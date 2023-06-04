import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import { FeedItem } from "../../../../shared/messenger-interface";

@Component({
  tag: "cut-message-item",
  styleUrl: "item.scss",
  shadow: true,
})
export class cutMessageItem {
  @Prop() item: FeedItem;
  @Prop() isSelected: Boolean;
  @Prop() currentUserId: String;

  @Event({ bubbles: true, composed: true }) feedItemClicked: EventEmitter<
    FeedItem
  >;

  clickHandler = (data: FeedItem) => {
    this.feedItemClicked.emit(data);
  };

  render() {
    const initialStyle = this.item.initialBackground
      ? {
        backgroundColor: this.item.initialBackground
      }
      : null;

    return (
      <div
        onClick={this.clickHandler.bind(this, this.item)}
        class={"feed-item " + (this.isSelected ? "selected" : "")}
      >
        <div class="initial-wrapper">
          <span style={initialStyle} class="initial">
            {this.item.initials}
          </span>
        </div>
        <div class={"content-wrapper " + (this.item.read ? "" : "unread")}>
          <p class="head">{this.item.title}</p>
          <p class="last-history"
            innerHTML={'' + ((this.item && this.item.sender_uid === this.currentUserId) ? 'You: ' : '') + this.item.message}
          ></p>
        </div>
        <div class="timestemp">{this.item.timestamp}</div>
      </div>
    );
  }
}
