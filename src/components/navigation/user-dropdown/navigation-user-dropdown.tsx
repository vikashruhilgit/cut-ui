import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";

import { CbMapMenu, CbMapNode } from "../model/navigation";
import { NavigationClickEvent } from "../model/ClickEvent";

@Component({
  tag: "cut-wc-navigation-user-dropdown",
  styleUrl: "./navigation-user-dropdown.scss",
  shadow: true
})
export class UserDropdown {
  @Prop() userMap: CbMapMenu;
  @Prop() isBeta: boolean;
  @Prop({ reflect: true }) hasLogoutEvent: boolean;

  @Event({ bubbles: true, composed: true }) clicked: EventEmitter;

  clickHandler = (event: NavigationClickEvent) => {
    this.clicked.emit(event);
  };

  generateIsBetaItem() {
    const betaEvent: NavigationClickEvent = { origin: 'BETA_TOGGLE', data: !this.isBeta };

    return <li onClick={this.clickHandler.bind(this, betaEvent)}>
      {
        (this.isBeta)
          ? 'Leave Beta'
          : 'Switch to Beta'
      }
    </li>
  }

  render() {
    const listItems = (this.userMap.list.length === 0)
      ? null
      : this.userMap.list.map((single: CbMapNode) => {
        let listHtml = (
          <li>
            <a
              href={single.link}
              target={single.newWindow ? "_blank" : "_self"}
            >
              {single.title}
            </a>
          </li>
        );
        if (this.hasLogoutEvent === true && (single.title === 'Log Out' || single.link.includes('logout'))) {
          const logoutEvent: NavigationClickEvent = { origin: 'LOG_OUT', data: single };
          listHtml = (
            <li onClick={this.clickHandler.bind(this, logoutEvent)}>
              {single.title}
            </li>
          );
        }

        return listHtml;
      });

    if (this.isBeta !== undefined) {
      const isBetaItem = this.generateIsBetaItem();
      const isBetaIdx = listItems.length - 2; // next to last;
      listItems.splice(isBetaIdx, 0, isBetaItem);
    }

    let renderedHtml = null;

    renderedHtml = (
      <cut-wc-custom-dropdown>
        <div slot="header">
          <div class="info-wrapper">
            {this.headline()}
            <cut-wc-icon icon="keyboard_arrow_down"></cut-wc-icon>
          </div>
        </div>
        <div class="notification-wrapper">
          {this.heading()}
          {listItems ? <ul class="list-item">{listItems}</ul> : null}
        </div>
      </cut-wc-custom-dropdown>
    );
    return renderedHtml;
  }

  headline() {
    return (this.userMap && this.userMap.metadata && this.userMap.metadata.headline)
      ? <p>{this.userMap.metadata.headline}</p>
      : null;
  }

  first() {
    return (this.userMap && this.userMap.metadata && this.userMap.metadata.first_name)
      ? <p class="user-name">{this.userMap.metadata.first_name}</p>
      : null;
  }

  email() {
    return (this.userMap && this.userMap.metadata && this.userMap.metadata.email)
      ? <p class="user-email">{this.userMap.metadata.email}</p>
      : null;
  }

  account() {
    return (this.userMap && this.userMap.metadata && this.userMap.metadata.current_account_name)
      ? <p class="account-tyep">{this.userMap.metadata.current_account_name}</p>
      : null;
  }

  heading() {
    return <div class="heading">
      {this.first()}
      {this.email()}
      {this.account()}
    </div>
  }
}
