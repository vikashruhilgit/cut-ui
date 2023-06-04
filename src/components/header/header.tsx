import { Component, h, Prop, EventEmitter, Event } from "@stencil/core";
import {
  DropDownDataModal,
  UserDropDownModal,
  UserInfoModal,
  FavoriteDropdownModal,
  ShoppingCartModel,
  commonDropdownModal,
  IconListDataModel,
  EventModal
} from "../../shared/interface";

@Component({
  tag: "cut-wc-header", // temp change for homepage conflict
  styleUrl: "./header.scss",
  shadow: true
})
export class CutHeader {
  @Prop() navigation: DropDownDataModal;
  @Prop() userDropDown: UserDropDownModal[];
  @Prop() favoriteDropdown: FavoriteDropdownModal;
  @Prop() IconListDropdown: IconListDataModel[];
  @Prop() userInfo: UserInfoModal;
  @Prop() headerImagePath: string;
  @Prop() shoppingCart: ShoppingCartModel;
  @Prop() commonDropdown: commonDropdownModal[];
  @Prop({ reflect: true }) noDropShadow: boolean;

  @Event({ bubbles: true, composed: true }) clicked: EventEmitter<EventModal>
  clickHandler = () => {
    this.clicked.emit({ origin: 'logo' });
  };

  render() {

    let commonDropdownHtml = null;
    let IconListDropdownHtml = null;

    if (this.commonDropdown && this.commonDropdown.length > 0) {
      commonDropdownHtml = this.commonDropdown.map(single => {
        return (
          <div>
            <cut-wc-common-dropdown
              dropDownData={single.list}
              icon={single.icon}
              showicon={single.showicon}
              toplabel={single.toplabel}
            ></cut-wc-common-dropdown>
          </div>
        )
      })
    }

    if (this.IconListDropdown && this.IconListDropdown.length > 0) {
      IconListDropdownHtml = this.IconListDropdown.map(single => {
        return (
          <div>
            <cut-wc-icon-dropdown
              items={single.list}
              count={single.count}
              icon={single.icon}
              heading={single.heading}
              mainLink={single.mainLink}
              mainLinkLabel={single.mainLinkLabel}
              topLabelColor={single.topLabelColor}
              origin={single.origin}
            ></cut-wc-icon-dropdown>
          </div>
        )
      })
    }

    return (
      <div class="wrapper">
        {this.headerImagePath ? (
          <div class="logo" onClick={this.clickHandler.bind(this)}>
            <img src={this.headerImagePath} alt="logo" />
          </div>
        ) : null}
        {this.navigation ? (
          <div class="navigation">
            <cut-wc-dropdown dropdownData={this.navigation}></cut-wc-dropdown>
          </div>
        ) : null}
        <div class="right-area">
          {commonDropdownHtml}
          {this.shoppingCart ? (
            <div>
              <cut-wc-shopping-cart
                shoppingCart={this.shoppingCart}
              ></cut-wc-shopping-cart>
            </div>
          ) : null}
          {this.favoriteDropdown && this.favoriteDropdown.list ? (
            <div>
              <cut-wc-favorite-dropdown
                favoriteItems={this.favoriteDropdown.list}
                count={this.favoriteDropdown.count}
                mainLink={this.favoriteDropdown.mainLink}
              ></cut-wc-favorite-dropdown>
            </div>
          ) : null}
          {IconListDropdownHtml}
          {this.userInfo ? (
            <div>
              <cut-wc-user-dropdown
                userDropDownData={this.userDropDown}
                userInfoData={this.userInfo}
              ></cut-wc-user-dropdown>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
