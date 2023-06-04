import {
  Component,
  h,
  Prop,
  EventEmitter,
  Event,
  Element
} from "@stencil/core";

import { CbMapMenu, CbMapNode, CbMapItem, isDivider, isLink } from '../model/navigation';

@Component({
  tag: "cut-wc-navigation-dropdown",
  styleUrl: "navigation-dropdown.scss",
  shadow: true
})
export class CutMenuItemDropdown {
  @Prop() mainMenu: CbMapMenu;

  @Event({ bubbles: true, composed: true }) clicked: EventEmitter;

  @Element() el: HTMLElement;

  clickHandler = (item: CbMapNode) => {
    this.el.classList.add("hidedroplist");
    // const { list, ...extra } = item;
    this.clicked.emit({
      ...item
    });

    setTimeout(() => {
      this.el.classList.remove("hidedroplist");
    }, 10);
  };

  render() {
    if (!this.mainMenu || !this.mainMenu.list) {
      return (<div class="wrapper"></div>)
    }

    const menu = this.buildNavigationMenu(this.mainMenu);
    return (
      <div class="wrapper">
        <ul class="main-list">{menu}</ul>
      </div>
    );
  }

  buildNavigationMenu(item: CbMapMenu) {
    return (item.list)
      ? item.list.map(i => this.renderMenuItem(i, 1))
      : null;
  }

  renderMenuItem(item: CbMapItem, level = 1) {
    return isDivider(item)
      ? this.buildDividerItem(level)
      : isLink(item)
        ? this.buildLinkItem(item)
        : this.buildMenuItem(item, level);
  }

  buildDividerItem(level: number) {
    return (level > 1) ? (<div class="divider"></div>) : ' | ';
  }

  buildLinkItem(item: CbMapNode) {
    return (
      <li class="">
        {
          (
            <p title={item.title}>
              <a
                target={item.newWindow ? "_blank" : ""}
                href={item.link}
              >
                {item.title}
              </a>
            </p>
          )
        }
      </li>
    );
  }

  buildMenuItem(item: CbMapMenu, level = 1) {
    const submenuItems = item.list.map(i => this.renderMenuItem(i, level + 1));

    const submenuWrapped = (submenuItems.length < 1)
      ? null
      : (level > 1)
        ? (
          [
            <cut-wc-icon icon="keyboard_arrow_right"></cut-wc-icon>,
            <ul class="dropdown-inner">{submenuItems}</ul>
          ]
        )
        : (
          <ul class="dropdown-main">{submenuItems}</ul>

        );

    return (
      <li>
        {
          (
            <p title={item.title}>
              {item.title}
            </p>
          )
        }
        {submenuWrapped}
      </li>
    );
  }
}
