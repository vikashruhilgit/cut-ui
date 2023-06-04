import {
  Component,
  h,
  Prop,
  EventEmitter,
  Event,
  Element,
} from "@stencil/core";
import { DropDownDataModal, DropDownModal } from "../../shared/interface";

@Component({
  tag: "cut-wc-dropdown",
  styleUrl: "dropdown.scss",
  shadow: true,
})
export class CutDropdown {
  @Prop() dropdownData: DropDownDataModal;
  @Prop() selectedNav: string;
  @Prop() highlightBasedOnId: boolean = false;

  @Event({ bubbles: true, composed: true }) clicked: EventEmitter;

  @Element() el: HTMLElement;

  clickHandler = (data: DropDownModal) => {
    this.el.classList.add("hidedroplist");
    const { list, ...extra } = data;
    this.clicked.emit({
      ...extra,
    });

    setTimeout(() => {
      this.el.classList.remove("hidedroplist");
    }, 10);
  };

  handleAncher = (e: MouseEvent, data: DropDownModal) => {
    if (data.preventAnchorDefault) {
      e.preventDefault();
      this.clickHandler(data);
    }
  };

  render() {
    let renderData = null;
    if (this.dropdownData && this.dropdownData.list) {
      renderData = this.dropdownData.list.map((single) => {
        let submenuData = null;
        if (single.list) {
          submenuData = single.list.map((submenu) => {
            let innerSubmenu = null;
            if (submenu.list && submenu.list.length > 0) {
              innerSubmenu = submenu.list.map((innerMenu) => {
                return (
                  <li>
                    {innerMenu.emitEvent ? (
                      <p onClick={this.clickHandler.bind(this, innerMenu)}>
                        {innerMenu.title}
                      </p>
                    ) : (
                      <a
                        target={innerMenu.newWindow ? "_blank" : ""}
                        href={innerMenu.link}
                        onClick={(e) => this.handleAncher(e, innerMenu)}
                      >
                        <p>{innerMenu.title}</p>
                      </a>
                    )}
                  </li>
                );
              });
            }
            return (
              <li>
                {submenu.emitEvent ? (
                  <p onClick={this.clickHandler.bind(this, submenu)}>
                    {submenu.title}
                  </p>
                ) : (
                  <a
                    target={submenu.newWindow ? "_blank" : ""}
                    href={submenu.link}
                    onClick={(e) => this.handleAncher(e, submenu)}
                  >
                    <p>{submenu.title}</p>
                  </a>
                )}
                {innerSubmenu
                  ? [
                      <cut-wc-icon icon="keyboard_arrow_right"></cut-wc-icon>,
                      <ul class="dropdown-inner">{innerSubmenu}</ul>,
                    ]
                  : null}
              </li>
            );
          });
        }

        return (
          <li
            class={
              this.highlightBasedOnId
                ? this.selectedNav === single.id
                  ? "selected"
                  : ""
                : this.selectedNav === single.highlightedLink
                ? "selected"
                : ""
            }
          >
            {single.emitEvent ? (
              <p
                onClick={this.clickHandler.bind(this, single)}
                title={single.title}
              >
                {single.title}
              </p>
            ) : (
              <p title={single.title}>
                <a
                  target={single.newWindow ? "_blank" : ""}
                  href={single.link}
                  onClick={(e) => this.handleAncher(e, single)}
                >
                  {single.title}
                </a>
              </p>
            )}

            {submenuData ? <ul class="dropdown-main">{submenuData}</ul> : null}
          </li>
        );
      });
    }

    return (
      <div class="wrapper">
        {renderData ? <ul class="main-list">{renderData}</ul> : null}
      </div>
    );
  }
}
