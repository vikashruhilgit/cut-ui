import {
  Component,
  h,
  Listen,
  Prop,
  Event,
  EventEmitter,
  State,
} from "@stencil/core";
import {
  getDefaultConfig,
  MessengerDataModal,
} from "../../shared/messenger-interface";

@Component({
  tag: "cut-wc-messenger",
  styleUrl: "messenger.scss",
  shadow: true,
})
export class CutMessenger {
  @Prop() messengerData: MessengerDataModal;
  @State() selectedId: string;
  @State() hideFeed: boolean = false;

  @Listen("feedItemClicked") feedItemClicked(event: CustomEvent) {
    this.messengerData.feedSelectedId = event.detail.id;
    this.selectedId = event.detail.id;
    this.messengerData.event = "feedItemClicked";
    this.messengerUpdate.emit(this.messengerData);
    this.hideFeed = true;
  }

  @Listen("msgSubmit") msgSubmit() {
    this.messengerData.event = "msgSubmit";
    this.messengerUpdate.emit(this.messengerData);
  }

  @Listen("filterChange") filterChange() {
    this.messengerData.event = "filterChange";
    this.messengerUpdate.emit(this.messengerData);
  }

  @Listen("actionUpdate") actionUpdate() {
    this.messengerData.event = "actionUpdate";
    this.messengerUpdate.emit(this.messengerData);
  }

  @Listen("scrollEnded") scrollEnded() {
    this.messengerData.event = "scrollEnded";
    this.messengerUpdate.emit(this.messengerData);
  }

  @Listen("scrollUpEnded") scrollUpEnded() {
    this.messengerData.event = "scrollUpEnded";
    this.messengerUpdate.emit(this.messengerData);
  }

  @Listen("headerTitleClicked") headerTitleClicked() {
    this.messengerData.event = "headerTitleClicked";
    this.messengerUpdate.emit(this.messengerData);
  }

  backButtonClicked() {
    this.hideFeed = false;
  }

  @Event({ bubbles: true, composed: true }) messengerUpdate: EventEmitter<
    MessengerDataModal
  >;

  showError = () => {
    return (
      <cut-wc-message-empty
        noDataMsg={this.messengerData.noDataMsgCenter}
      ></cut-wc-message-empty>
    );
  };

  render() {
    const config = this.messengerData && this.messengerData.config
      ? {
          ...getDefaultConfig(),
          ...this.messengerData.config,
        }
      : getDefaultConfig();

    return this.messengerData ? (
      <div
        class={{
          "messenger-wrapper": true,
          "hide-feed": this.hideFeed,
          "hide-message-center": !this.hideFeed,
        }}
      >
        <div
          class={{
            "back-to-feed": true,
            "back-to-feed-hide": !this.hideFeed,
          }}
        >
          <div class="icon-wrapper">
            <cut-wc-icon
              onClick={() => {
                this.backButtonClicked();
              }}
              icon={"keyboard_arrow_left"}
            ></cut-wc-icon>
            <span
              onClick={() => {
                this.backButtonClicked();
              }}
            >
              Back
            </span>
          </div>
        </div>
        <cut-wc-message-feed
          feedItems={this.messengerData.feedItems}
          selectedId={this.messengerData.feedSelectedId}
          filterData={this.messengerData.feedFilters}
          showScrollLoader={this.messengerData.showScrollLoader}
          showFeedLoader={this.messengerData.showFeedLoader}
          currentUserId={this.messengerData.currentUserId}
          noDataMsg={this.messengerData.noDataMsgFeed}
        ></cut-wc-message-feed>
        {(!this.messengerData.feedItems ||
          this.messengerData.feedItems.length === 0) &&
        !this.messengerData.showFeedLoader ? (
          this.showError()
        ) : (
          <cut-wc-message-center
            actions={this.messengerData.msgActions}
            currentUserId={this.messengerData.currentUserId}
            msgs={this.messengerData.conversation}
            header={this.messengerData.conversationHeader}
            inputData={this.messengerData.newMsgInputData}
            newMsgLoader={this.messengerData.newMsgLoader}
            conversationLoader={this.messengerData.conversationLoader}
            currentEvent={this.messengerData.event}
            selectedId={this.messengerData.feedSelectedId}
            config={config}
          ></cut-wc-message-center>
        )}
      </div>
    ) : null;
  }
}
