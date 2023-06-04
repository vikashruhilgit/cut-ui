import { Component, h, State } from "@stencil/core";
import {
  messengerDataMock,
  stepperMock,
  templateMock,
  messageMock,
  jobMock,
} from "./mock";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: false,
})
export class MyComponent {
  @State() messengerData = messengerDataMock;
  @State() stepperData = stepperMock;
  @State() templates = templateMock;
  @State() message = messageMock;
  @State() job = jobMock;

  /*   @Listen("clicked") clickShoppingCartHandler(
    event: CustomEvent<ShoppingCartModel>
  ) {
    if (event.detail.origin === "cart") {
      console.log(
        "go to shopping cart page: https://employer.careerbuilder.com/ecommerce/global/shoppingcart.aspx",
        event
      );
    }
  }

  @Listen("dropdownClicked") clickHandler(event: CustomEvent) {
    console.log(event.detail);
  }

  @Listen("clicked") clickHandler1(event: CustomEvent) {
    console.log(event.detail);
  }*/

  /* abc = true;

  @Listen("messengerUpdate") messengerUpdate(event: CustomEvent) {
    console.log(event.detail);
    if (this.abc) {
      this.messengerData = messengerDataMock1;
      this.abc = false;
    } else {
      this.messengerData = messengerDataMock;
    }
  } */
  /*
  @Listen("clicked") handleInput(event: CustomEvent) {
    console.log(event);
  } */

  render() {
    return (
      <div>
        {/* {<cut-wc-editor id="editor" html="Coucou cémoi"></cut-wc-editor>} */}
        {
          <cut-wc-messenger
            messengerData={this.messengerData}
          ></cut-wc-messenger>
        }
        {
          <cut-wc-message
            templates={this.templates}
            message={this.message}
            job={this.job}
          ></cut-wc-message>
        }

        {
          // <cut-wc-stepper
          //   steps={this.stepperData}
          //   vertical={false}
          //   emitEvent={true}
          // ></cut-wc-stepper>
        }
        {/* <cut-wc-header
          navigation={this.navigation}
          userDropDown={this.userDropDown}
          favoriteDropdown={this.favoriteDropdown}
          userInfo={this.userInfo}
          headerImagePath=""
          shoppingCart={this.shoppingCart}
          commonDropdown={this.commonDropdown}
          IconListDropdown={[this.notificationDropdown, this.favoriteDropdownNew]}
          no-drop-shadow
        ></cut-wc-header>
        <div> */}
        {/* <cut-wc-tab-group></cut-wc-tab-group>
          <cut-wc-icon icon="check"></cut-wc-icon>
          <i class="cut-assign-to-requisition"></i> */}
        {/* <cut-wc-button>hello</cut-wc-button> */}
        {/* </div> */}
        {/* <cut-wc-messenger messengerData={messengerDataMock}></cut-wc-messenger> */}
        {/* <cut-wc-input
          name="test"
          disabled={false}
          label="test"
          readonly={false}
          type="text"
          id="1"
          icon="check"
          guideline="test guideline"
          require={true}
          success
        ></cut-wc-input> */}
        {/* <cut-wc-product-footer footerData={footerData}></cut-wc-product-footer> */}
        {/* <cut-wc-web-footer footerData={footerWebData}></cut-wc-web-footer> */}
        {
          // <cut-wc-messenger
          //   messengerData={this.messengerData}
          // ></cut-wc-messenger>
        }
        {/* <cut-wc-time-picker time="3:11 am"></cut-wc-time-picker> */}
        {/* <cut-wc-select
          dropDownData={[
            {
              title: "abc",
              value: "1",
              id: "1",
            },
            {
              title: "abc1",
              value: "2",
              id: "2",
            },
          ]}
        ></cut-wc-select>
        {/* <cut-wc-text-area label="hello" require></cut-wc-text-area> */}
        {/* <cut-wc-checkbox name="test">Hello</cut-wc-checkbox> */}
        {/* <cut-wc-radio-group guideline="mai guifdert hjfghej" name="abc">
          <cut-wc-radio name="abc" guideline="here is the guide">
            a
          </cut-wc-radio>
          <cut-wc-radio name="abc">b</cut-wc-radio>
        </cut-wc-radio-group> */}
        {/* <cut-wc-tabs selected-tab={"abc"}>
          <cut-wc-tab label="abc"></cut-wc-tab>
          <cut-wc-tab label="abc1"></cut-wc-tab>
          <cut-wc-tab label="abc2"></cut-wc-tab>
          <cut-wc-tab label="abc3"></cut-wc-tab>
          <cut-wc-tab label="abc4"></cut-wc-tab>
          <cut-wc-tab label="abc5"></cut-wc-tab>
          <cut-wc-tab label="abc6"></cut-wc-tab>
        </cut-wc-tabs>
        <div part="tabs" data-rel="abc">
          123
        </div>
        <div part="tabs" data-rel="abc1">
          234
        </div>
        <div part="tabs" data-rel="abc2">
          345
        </div> */}
        {/* <cut-wc-table></cut-wc-table> */}

        <p>Testing.....</p>
        <p>Test your component here....</p>
      </div>
    );
  }
}
