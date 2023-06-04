import {
  Component,
  h,
  Prop,
  Listen,
  State,
  Event,
  EventEmitter,
} from "@stencil/core";
import { DropDownModal } from "../../../shared/interface";
import { FeedItem } from "../../../shared/messenger-interface";

@Component({
  styleUrl: "message-feed.scss",
  tag: "cut-wc-message-feed",
  shadow: true,
})
export class CutMessageFeed {
  @Prop() selectedId: string;
  @Prop() showScrollLoader: boolean = false;
  @Prop() showFeedLoader: boolean = false;
  @Prop() feedItems: FeedItem[];
  @Prop({ mutable: true }) filterData: DropDownModal[];
  @Prop() currentUserId: String;
  @Prop() noDataMsg: string;

  @State() filterLabel: string;

  @Event({ bubbles: true, composed: true }) scrollEnded: EventEmitter<boolean>;
  @Event({ bubbles: true, composed: true }) filterChange: EventEmitter<DropDownModal>;


  scrollWrapper: HTMLElement;

  @Listen("clicked") clicked(event: CustomEvent) {
    if (event.detail.id) {
      this.filterData.forEach((single) => {
        if (single.id === event.detail.id) {
          this.filterLabel = single.title;
          single.selected = true;
          this.filterChange.emit(single);
        } else {
          single.selected = false;
        }
      });
    }
  }

  renderItems = (data: FeedItem[]) => {
    return data.map((single: FeedItem) => {
      return (
        <cut-message-item
          isSelected={single.id === this.selectedId ? true : false}
          item={single}
          currentUserId={this.currentUserId}
        ></cut-message-item>
      );
    });
  };

  getFilterLabel = () => {
    if (this.filterData && this.filterData.length > 0) {
      let filterLabel = this.filterData[0].title;
      this.filterData.forEach((val) => {
        if (val.selected) {
          filterLabel = val.title;
        }
      });
      return filterLabel;
    }
    return "";
  };

  componentWillLoad() {
    this.filterLabel = this.getFilterLabel();
  }
  handleScroll() {
    if (
      this.scrollWrapper.scrollHeight - this.scrollWrapper.scrollTop ===
      this.scrollWrapper.clientHeight
    ) {
      this.scrollEnded.emit(true);
    }
  }

  feedLoader(count: number = 1) {
    const items = new Array(count).fill(" ");
    return items.map(() => (
      <div class="loader">
        <div class="left">
          <cut-wc-loader
            styleOverrides={{
              width: "30px",
              height: "30px",
              marginRight: "5px",
              borderRadius: "50%",
            }}
          ></cut-wc-loader>
        </div>
        <div class="right">
          <cut-wc-loader
            styleOverrides={{
              height: "10px",
            }}
          ></cut-wc-loader>
          <cut-wc-loader
            styleOverrides={{
              height: "15px",
            }}
          ></cut-wc-loader>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div class="feed-wrapper">
        {this.filterData && this.filterData.length > 0 ? (
          <div class="filter-dropdown">
            <cut-wc-common-dropdown
              dropDownData={this.filterData}
              icon={"keyboard_arrow_down"}
              showicon={true}
              toplabel={this.filterLabel}
              hideBottomLine={true}
              dropdownShowFrom={"left"}
              highlightSelected={true}
            ></cut-wc-common-dropdown>
          </div>
        ) : null}
        {this.feedItems && this.feedItems.length > 0 ? (
          <div
            class="feed-container"
            onScroll={this.handleScroll.bind(this)}
            ref={(el) => (this.scrollWrapper = el as HTMLElement)}
          >
            {this.feedItems ? this.renderItems(this.feedItems) : null}
            {this.showFeedLoader ? this.feedLoader(5) : null}
            {this.showScrollLoader ? this.feedLoader() : null}
          </div>
        ) : <div class="no-feed">{this.noDataMsg}</div>}
      </div>
    );
  }
}
