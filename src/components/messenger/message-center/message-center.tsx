import { Component, h, Prop } from "@stencil/core";
import { DropDownModal } from "../../../shared/interface";
import {
  ConfigModal,
  ConversationHeaderModal,
  EventMessageModal,
  JobMessageModal,
  MessengerEvents,  MsgDataModal,  NewMessageInputModal,
} from "../../../shared/messenger-interface";

@Component({
  styleUrl: "message-center.scss",
  tag: "cut-wc-message-center",
  shadow: true,
})
export class CutMessageCenter {
  @Prop() currentUserId: string;
  @Prop() selectedId: string;
  @Prop() msgs: JobMessageModal[] | EventMessageModal[] | MsgDataModal[];
  @Prop() actions: DropDownModal[];
  @Prop() header: ConversationHeaderModal;
  @Prop() inputData: NewMessageInputModal;
  @Prop() newMsgLoader: boolean;
  @Prop() conversationLoader: boolean;
  @Prop() currentEvent: MessengerEvents;
  @Prop() config: ConfigModal;

  render() {
    return this.selectedId ? (
      <div class="message-wrapper">
        <cut-message-header
          actions={this.actions}
          header={this.header}
          config={this.config}
        ></cut-message-header>
        <cut-message-history
          currentUserId={this.currentUserId}
          msgs={this.msgs}
          newMsgLoader={this.newMsgLoader}
          conversationLoader={this.conversationLoader}
          currentEvent={this.currentEvent}
        ></cut-message-history>
        {!this.config.newMessageInput.hide ? <cut-message-new
          inputData={this.inputData}
          config={this.config}
        ></cut-message-new> : null}
      </div>
    ) : (
      <div class="message-wrapper">
        <cut-wc-message-empty
          noDataMsg={"You haven't selected a conversation yet"}
          noWrapper={true}
        ></cut-wc-message-empty>
      </div>
    );
  }
}
