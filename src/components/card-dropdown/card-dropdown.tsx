import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import { CardDropDownDataModal } from "../../shared/interface";

@Component({
  tag: "cut-wc-card-dropdown",
  styleUrl: "card-dropdown.scss",
  shadow: true
})
export class CutCardDropdown {
  @Prop() dropdownData: CardDropDownDataModal[];
  @Prop() dropdownId: string;
  @Prop() icon: string = "more_vert";
  @Event({ bubbles: true, composed: true }) clicked: EventEmitter;

  clickHandler = (data: any) => {
    this.clicked.emit({
      data: data,
      dropdownId: this.dropdownId,
      type: "dropdown"
    });
  };

  render() {
    let renderData = null;
    if (this.dropdownData) {
      const renderListData = this.dropdownData.map(single => {
        return (
          <li>
            <p onClick={this.clickHandler.bind(this, single)}>{single.title}</p>
          </li>
        );
      });
      renderData = <ul class="dropdown-main">{renderListData}</ul>;
    }

    return (
      <div class="main">
        {renderData ? (
          <p class="more">
            <cut-wc-icon icon={this.icon}></cut-wc-icon>
            {renderData}
          </p>
        ) : null}
      </div>
    );
  }
}
