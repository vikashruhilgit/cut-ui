import { Component, h, Prop, EventEmitter, Event } from "@stencil/core";
import {
  FooterDataModal,
  FooterIconModal,
  DropDownModal,
} from "../../../shared/interface";

@Component({
  tag: "cut-wc-product-footer",
  styleUrl: "footer-product.scss",
  shadow: true,
})
export class CutFooterProduct {
  @Prop() hideCopyright: boolean = false;
  @Prop() footerData: FooterDataModal;
  linkCount: number = 3;

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
        <div class="footer-wrapper">
          {this.footerData ? (
            <div class="branding-and-links">
              {this.footerData.logo ? (
                <cut-wc-logo-cb
                  imagePath={this.footerData.logo}
                ></cut-wc-logo-cb>
              ) : null}
              <div class="footer-data">
                {this.footerData.list ? (
                  <div class="useful-list-links">
                    {this.getFooterLinks(this.footerData.list)}
                    {this.footerData.list.length > this.linkCount ? (
                      <div class="other-link">
                        <cut-wc-common-dropdown
                          dropDownData={this.footerData.list.slice(
                            this.linkCount
                          )}
                          icon={"keyboard_arrow_down"}
                          showicon={true}
                          hideBottomLine={true}
                          dropdownShowFrom={"left"}
                        ></cut-wc-common-dropdown>
                      </div>
                    ) : null}
                  </div>
                ) : null}
                {this.footerData.icons ? (
                  <div class="useful-icon-links">
                    {this.getFooterIcons(this.footerData.icons)}
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
          {!this.hideCopyright ? <cut-wc-copyright></cut-wc-copyright> : null}
        </div>
      </div>
    );
  }

  getFooterIcons(icons: FooterIconModal[]) {
    return icons.map((menuIcons) => {
      return (
        <p class="styling-social-icons" title={menuIcons.description}>
          <a target={menuIcons.newWindow ? "_blank" : ""} href={menuIcons.link}>
            <cut-wc-icon icon={menuIcons.name}></cut-wc-icon>
          </a>
        </p>
      );
    });
  }

  getFooterLinks(list: DropDownModal[]) {
    return list.slice(0, this.linkCount).map((menuItems) => {
      return (
        <p
          class="styling-list-links"
          onClick={this.clickHandler.bind(this, menuItems)}
          title={menuItems.title}
        >
          <a target={menuItems.newWindow ? "_blank" : ""} href={menuItems.link}>
            {menuItems.title}
          </a>
        </p>
      );
    });
  }
}
