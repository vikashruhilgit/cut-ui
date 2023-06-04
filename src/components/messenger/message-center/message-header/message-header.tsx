import { Component, h, Prop, Listen, Event, EventEmitter } from "@stencil/core";
import { DropDownModal } from "../../../../shared/interface";
import { ConfigModal, ConversationHeaderModal } from '../../../../shared/messenger-interface';

@Component({
  tag: "cut-message-header",
  styleUrl: "message-header.scss",
  shadow: true,
})
export class CutMessageHeader {
  @Prop({ mutable: true }) actions: DropDownModal[];
  @Prop() header: ConversationHeaderModal;
  @Prop() config: ConfigModal;

  @Event({ bubbles: true, composed: true }) actionUpdate: EventEmitter<DropDownModal>;
  @Event({ bubbles: true, composed: true }) headerTitleClicked: EventEmitter<boolean>;

  @Listen("clicked") clicked(event: CustomEvent) {
    if (event.detail.id) {
      this.actions.forEach((single) => {
        if (single.id === event.detail.id) {
          single.selected = true;
          this.actionUpdate.emit(single);
        } else {
          single.selected = false;
        }
      });
    }
  }

  clickHeaderTitle = () => {
    this.headerTitleClicked.emit(true);
  }

  render() {
    const initialStyle =
      this.header && this.header.backgroundColor
        ? {
          backgroundColor: this.header.backgroundColor,
        }
        : null;

    return (
      <div class="message-header">
        <div>
          {this.header && Object.keys(this.header).length !== 0 ? (
            <div class="header">
              <div class="initials">
                {this.header.initials ? (
                  <span style={initialStyle} class="user-initial">
                    {this.header.initials}
                  </span>
                ) : null}
              </div>
              <div class={(!this.config.conversationHeader.hideUserActivity && this.header.userActivity) ? 'info' : 'info no-active-status'}>
                {this.config.conversationHeader.isClickable ? (
                  <span class="user-name link" onClick={this.clickHeaderTitle}>{this.header.header}</span>
                ) : (<span class="user-name">{this.header.header}</span>
                  )}
                {this.header.info ? (
                  <span class="user-info">{" " + this.header.info}</span>
                ) : null}
              </div>
              {(!this.config.conversationHeader.hideUserActivity && this.header.userActivity) ? (
                <div class="active-status">
                  <div class="active-status-wrapper">
                    <span class={this.header.userActivity.isActive ? 'active' : 'inactive'}></span>
                  </div>
                  <span class="m-l-7">{this.header.userActivity.isActive ? 'Active now' : this.header.userActivity.lastActive}</span>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
        <div class="action-dropdown">
          {this.actions && this.actions.length > 0 ? (
            <cut-wc-common-dropdown
              dropDownData={this.actions}
              icon={"more_vert"}
              showicon={true}
              hideBottomLine={true}
              dropdownShowFrom={"right"}
              style={{ height: '25px' }}
            ></cut-wc-common-dropdown>
          ) : null}
        </div>
      </div>
    );
  }
}
