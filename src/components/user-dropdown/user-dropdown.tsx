import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";

import { UserDropDownModal, UserInfoModal } from "../../shared/interface";

@Component({
  tag: "cut-wc-user-dropdown",
  styleUrl: "./user-dropdown.scss",
  shadow: true
})
export class UserDropdown {
  @Prop() userDropDownData: UserDropDownModal[];

  @Prop() userInfoData: UserInfoModal;

  @Event({ bubbles: true, composed: true }) clicked: EventEmitter;

  clickHandler = (data: UserDropDownModal) => {
    this.clicked.emit(data);
  };

  render() {
    let listItem = null;
    if (this.userDropDownData && this.userDropDownData.length >= 1) {
      listItem = this.userDropDownData.map(single => {
        let listHtml = (
          <li>
            <a
              href={single.link}
              target={single.newWindow ? "_blank" : "_self"}
            >
              <p>
                {single.title}
              </p>
            </a>
          </li>
        );
        if (single.emitEvent) {
          listHtml = (
            <li onClick={this.clickHandler.bind(this, single)}>
              <p>
                {single.title}
              </p>
            </li>
          );
        }

        return listHtml;
      });
    }

    let renderedHtml = null;

    if (this.userInfoData) {
      renderedHtml = (
        <cut-wc-custom-dropdown>
          <div slot="header">
            <div class="info-wrapper">
              {this.userInfoData.headline ? (
                <p>{this.userInfoData.headline}</p>
              ) : null}
              <cut-wc-icon icon="keyboard_arrow_down"></cut-wc-icon>
            </div>
          </div>
          <div class="notification-wrapper">
            <div class="heading">
              {this.userInfoData.first_name ? (
                <p class="user-name">{this.userInfoData.first_name}</p>
              ) : null}

              {this.userInfoData.email ? (
                <p class="user-email">{this.userInfoData.email}</p>
              ) : null}

              {this.userInfoData.current_account_name ? (
                <p class="account-tyep">
                  {this.userInfoData.current_account_name}
                </p>
              ) : null}
            </div>
            {listItem ? <ul class="list-item">{listItem}</ul> : null}
          </div>
        </cut-wc-custom-dropdown>
      );
    }

    return renderedHtml;
  }
}
