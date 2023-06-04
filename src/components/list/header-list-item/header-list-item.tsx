import { Component, h, Prop, EventEmitter, Event } from "@stencil/core";
import { IconListItemDataModel } from "../../../shared/interface";

@Component({
  tag: "cut-wc-header-list-item",
  styleUrl: "./header-list-item.scss",
  shadow: true,
})
export class HeaderListItem {
  @Prop() data: IconListItemDataModel;
  @Event({ bubbles: true, composed: true }) clicked: EventEmitter<
    IconListItemDataModel
  >;

  clickHandler = (data: IconListItemDataModel) => {
    this.clicked.emit(data);
  };

  render() {
    return (
      <div
        class={this.data.unreadStatus ? "msg-wrapper unread" : "msg-wrapper"}
      >
        {this.data.date ? (
          <p class="msg-date">
            {this.data.dateLabel ? this.data.dateLabel + ": " : ""}
            {this.data.date}
          </p>
        ) : null}
        <div class="msg">
          {this.data.icon ?
            <div class="icon">
              {this.data.emitEventByIcon ? (
                <cut-wc-icon
                  onClick={this.clickHandler.bind(this, {
                    ...this.data,
                    type: this.data.icon + "-click",
                  })}
                  slot="header"
                  icon={this.data.icon}
                ></cut-wc-icon>
              ) : (
                  <a href={this.data.link}>
                    <cut-wc-icon slot="header" icon={this.data.icon}></cut-wc-icon>
                  </a>
                )}
            </div> : null}
          <div class="msg-text">
            {this.data.title ? (
              <p class="highlight">
                {this.data.emitEvent ? (
                  <span onClick={this.clickHandler.bind(this, this.data)}>
                    {this.data.title}
                  </span>
                ) : (
                    <a href={this.data.link}>
                      <span>{this.data.title}</span>
                    </a>
                  )}
              </p>
            ) : null}
            {this.data.desc ? (
              this.data.link ? (
                <p
                  class="msg-link"
                  innerHTML={this.data.desc}
                  onClick={this.clickHandler.bind(this, this.data)}
                ></p>
              ) : (
                  <p innerHTML={this.data.desc}></p>
                )
            ) : null}

            <p>
              {this.data.address ? <span>{this.data.address}</span> : null}
              {this.data.phone ? (
                <span>{" | M: " + this.data.phone}</span>
              ) : null}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
