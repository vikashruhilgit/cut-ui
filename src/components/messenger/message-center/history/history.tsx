import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import {
  MessengerEvents,
  MsgDataModal,
} from "../../../../shared/messenger-interface";

@Component({
  tag: "cut-message-history",
  styleUrl: "history.scss",
  shadow: true,
})
export class CutMessageHistory {
  @Prop() currentUserId: string;
  @Prop() msgs: MsgDataModal[];
  @Prop() newMsgLoader: boolean = false;
  @Prop() conversationLoader: boolean = false;
  @Prop() currentEvent: MessengerEvents;
  msgWrapper: HTMLElement;
  scrollHeight: number;

  @Event({ bubbles: true, composed: true }) scrollUpEnded: EventEmitter<
    boolean
  >;

  renderMsg = (msgs: MsgDataModal[]) => {
    return msgs.map((single) => {
      return (
        <cut-history-msg
          msg={single}
          currentUserId={this.currentUserId}
        ></cut-history-msg>
      );
    });
  };

  loader(count: number = 1) {
    const items = new Array(count).fill(" ");
    return items.map(() => (
      <div class="loader">
        <cut-wc-loader
          styleOverrides={{
            height: "50px",
          }}
        ></cut-wc-loader>
        <cut-wc-loader
          styleOverrides={{
            height: "10px",
            width: "100px",
          }}
        ></cut-wc-loader>
      </div>
    ));
  }

  handleScroll = () => {
    if (
      this.msgWrapper.clientHeight + this.msgWrapper.scrollTop ===
      this.msgWrapper.clientHeight
    ) {
      this.scrollUpEnded.emit(true);
    }
  };

  render() {
    return (
      <div
        class="message-history"
        onScroll={this.handleScroll.bind(this)}
        ref={(el) => (this.msgWrapper = el as HTMLElement)}
      >
        {
          this.conversationLoader
            ? this.loader(2)
            : (this.msgs && this.msgs.length > 0)
              ? this.renderMsg(this.msgs)
              : <cut-wc-message-empty
                noDataMsg={'You don\'t have any conversation yet'}
                noWrapper={true}
              ></cut-wc-message-empty>
        }
        {
          this.newMsgLoader ? (
            <cut-wc-loader
              class="new-msg"
              count={5}
              styleOverrides={{ width: "10px", marginRight: "5px" }}
            ></cut-wc-loader>
          ) : null
        }
      </div>
    );
  }

  componentDidLoad() {
    this.msgWrapper.scrollTop = this.msgWrapper.scrollHeight;
  }

  componentDidRender() {
    if (this.currentEvent === "scrollUpEnded") {
      this.msgWrapper.scrollTop =
        this.msgWrapper.scrollHeight - this.scrollHeight;
    } else {
      this.msgWrapper.scrollTop = this.msgWrapper.scrollHeight;
    }
    this.scrollHeight = this.msgWrapper.scrollHeight;
  }
}
