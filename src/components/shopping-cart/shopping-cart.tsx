import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import { ShoppingCartModel } from "../../shared/interface";

@Component({
  tag: "cut-wc-shopping-cart",
  styleUrl: "shopping-cart.scss",
  shadow: true
})
export class CutShoppingCart {
  @Prop({ reflect: true }) shoppingCart: ShoppingCartModel;

  @Event({
    composed: true,
    bubbles: true
  })
  clicked: EventEmitter<ShoppingCartModel>;

  navigate = _ => {
    this.clicked.emit(this.shoppingCart);
  };

  render() {
    return (
      <div class="top" onClick={this.navigate}>
        <div
          class="icon-wrapper">
          <cut-wc-icon icon="shopping_cart"></cut-wc-icon>
          <div class="count">
            <span>
              {this.shoppingCart.count || 0}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
