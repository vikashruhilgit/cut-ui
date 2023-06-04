import { Component, h, Prop } from "@stencil/core";
import { CbMapNode, CbMapMenu } from "../model";

@Component({
  tag: "cut-wc-navigation-common-dropdown",
  styleUrl: "./navigation-common-dropdown.scss",
  shadow: true
})
export class CommonDropdown {
  @Prop() menu: CbMapMenu;
  @Prop() showicon: boolean = true;
  @Prop() icon: string = 'apps';
  @Prop() toplabel: string = '';

  render() {
    let listItem = null;
    let showMe = (this.menu && this.menu.list && this.menu.list.length > 0);

    if (showMe) {
      listItem = this.menu.list.map(single => {
        /*
          Hacky, but I'm rushing.  Should support multiple depths, probably.
          Can refer to navigation-dropdown for recursive implementation, which could be reused here I think.
        */
        const item: CbMapNode = single as CbMapNode;

        let listHtml = (
          <li>
            <a
              href={item.link}
              target={item.newWindow ? "_blank" : "_self"}
            >
              {item.title}
            </a>
          </li>
        );
        // if (single.emitEvent) {
        //   listHtml = (
        //     <li onClick={this.clickHandler.bind(this, single)}>
        //       {single.title}
        //     </li>
        //   );
        // }

        return listHtml;
      });
    }

    return (showMe) ?
      (
        <cut-wc-custom-dropdown>
          <div slot="header">
            <div class="info-wrapper">
              {this.toplabel ? this.toplabel + " " : ""}
              {this.showicon
                ? <cut-wc-icon icon={this.icon}></cut-wc-icon>
                : ''}
            </div>
          </div>
          <div class="notification-wrapper">
            {listItem ? <ul class="list-item">{listItem}</ul> : null}
          </div>
        </cut-wc-custom-dropdown>
      )
      : null;
  }

}
