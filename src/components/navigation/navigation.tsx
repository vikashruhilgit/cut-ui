import { Component, h, Prop } from "@stencil/core";
import {
  ShoppingCartModel, CB_CDN
} from "../../shared/interface";
import { CbMapMenu } from "./model/navigation";

const LOGO_PATH = `${CB_CDN}/assets/images/cb-logo.jpeg`;
const LOGO_PATH_BETA = `${CB_CDN}/assets/images/cb-logo-beta.jpeg`;

@Component({
  tag: "cut-wc-navigation",
  styleUrl: "./navigation.scss",
  shadow: true
})
export class CutHeader {
  @Prop() navigationMap: CbMapMenu;
  @Prop() userMap: CbMapMenu;
  @Prop() bentoMap: CbMapMenu;
  @Prop() shoppingCart: ShoppingCartModel;
  @Prop() isBeta: boolean = undefined;
  @Prop() headerImagePath = LOGO_PATH;
  @Prop() betaHeaderImagePath = LOGO_PATH_BETA;
  @Prop({ reflect: true }) noDropShadow: boolean;
  @Prop({ reflect: true }) hasLogoutEvent: boolean;

  render() {
    return (
      <div class="wrapper">
        {this.buildLogo()}

        {this.navigationMap ? (
          <div class="navigation">
            <cut-wc-navigation-dropdown mainMenu={this.navigationMap}></cut-wc-navigation-dropdown>
          </div>
        ) : null}
        <div class="right-area">
          {this.bentoMap ? (
            <div>
              <cut-wc-navigation-common-dropdown menu={this.bentoMap}></cut-wc-navigation-common-dropdown>
            </div>
          ) : null}
          {this.shoppingCart ? (
            <div>
              <cut-wc-shopping-cart shoppingCart={this.shoppingCart}></cut-wc-shopping-cart>
            </div>
          ) : null}
          {this.userMap ? (
            <div>
              <cut-wc-navigation-user-dropdown isBeta={this.isBeta} userMap={this.userMap} hasLogoutEvent={this.hasLogoutEvent}></cut-wc-navigation-user-dropdown>
            </div>
          ) : null}
        </div>
      </div >
    );
  }

  buildLogo() {
    return this.isBeta
      ? (
        <div class="logo">
          <a
            href={'/'}
            target={'_self'}
          >
            <img src={this.betaHeaderImagePath} alt="logo" />
          </a>
        </div>
      )
      : (
        <div class="logo">
          <a
            href={'/'}
            target={'_self'}
          >
            <img src={this.headerImagePath} alt="logo" />
          </a>
        </div>
      )
  }
}
