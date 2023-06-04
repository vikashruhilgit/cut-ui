import { Component, h, Prop, EventEmitter, Event } from "@stencil/core";
import {
  FooterDataModal,
  DropDownModal,
  FooterIconModal,
} from "../../../shared/interface";

@Component({
  tag: "cut-wc-web-footer",
  styleUrl: "footer-web.scss",
  shadow: true,
})
export class CutFooterWeb {
  @Prop() hideCopyright: boolean = false;
  @Prop() footerData: FooterDataModal;

  @Event() clicked: EventEmitter;
  clickHandler = (data: DropDownModal) => {
    const { list, ...extra } = data;
    this.clicked.emit({
      ...extra,
    });
  };

  render() {
    return (
      <div class="footer">
        {this.footerData ? (
          <div class="footer-wrapper">
            {this.footerData.logo ? (
              <cut-wc-logo-cb
                imagePath={this.footerData.logo}
                tagLine={this.footerData.tagLine}
              ></cut-wc-logo-cb>
            ) : null}
            <div class="footer-data">
              {this.footerData.list ? (
                <div class="useful-list-links">
                  {this.getFooterLinks(this.footerData.list)}
                </div>
              ) : null}
              {this.footerData.icons ? (
                <div class="useful-icon-links">
                  {this.getFooterIcons(this.footerData.icons)}
                </div>
              ) : null}
            </div>
            {!this.hideCopyright ? <cut-wc-copyright></cut-wc-copyright> : null}
          </div>
        ) : null}
      </div>
    );
  }

  getIconBlock(iconBlock: FooterIconModal) {
    return iconBlock.items.map((submenu) => {
      return (
        <div>
          {submenu.appIcons ? (
            <p class="styling-icons">
              <a target={submenu.newWindow ? "_blank" : ""} href={submenu.link}>
                <img title={submenu.description} src={submenu.imagePath} />
              </a>
            </p>
          ) : (
            <p class="styling-social-icons" title={submenu.description}>
              <a target={submenu.newWindow ? "_blank" : ""} href={submenu.link}>
                <cut-wc-icon icon={submenu.name}></cut-wc-icon>
              </a>
            </p>
          )}
        </div>
      );
    });
  }

  getFooterIcons(icons: FooterIconModal[]) {
    return icons.map((iconBlock: FooterIconModal) => {
      return (
        <div class="columns">
          <p class="heading">{iconBlock.title}</p>
          {iconBlock.items && iconBlock.items.length > 0 ? (
            <div class="icon-sub-menu-list">{this.getIconBlock(iconBlock)}</div>
          ) : null}
        </div>
      );
    });
  }

  getLinks(subLinks: DropDownModal[]) {
    return subLinks.map((submenu) => {
      if (submenu.title) {
        return (
          <div>
            <p
              onClick={this.clickHandler.bind(this, submenu)}
              title={submenu.title}
            >
              <a target={submenu.newWindow ? "_blank" : ""} href={submenu.link}>
                {submenu.title}
              </a>
            </p>
          </div>
        );
      }
    });
  }

  getFooterLinks(list: DropDownModal[]) {
    return list.map((column) => {
      return (
        <div class="columns">
          <p class="heading">{column.title}</p>
          {column.list && column.list.length > 0 ? (
            <div class="sub-menu-list">{this.getLinks(column.list)}</div>
          ) : null}
        </div>
      );
    });
  }
}
