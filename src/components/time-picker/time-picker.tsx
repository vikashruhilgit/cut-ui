import {
  Component,
  h,
  Prop,
  ComponentWillLoad,
  Watch,
  EventEmitter,
  Event,
  Listen,
} from "@stencil/core";

@Component({
  tag: "cut-wc-time-picker",
  styleUrl: "time-picker.scss",
  shadow: true,
})
export class CutTimePicker implements ComponentWillLoad {
  @Prop({ reflect: true }) time: string;
  @Prop({ reflect: true }) guideline: string = "";
  @Prop({ reflect: true }) open: boolean;
  @Prop({ reflect: true }) popuptop: string = "center";
  @Prop({ reflect: true }) popupleft: string = "center";
  @Prop({ reflect: true }) popupwidth: string = "350px";
  @Prop({ reflect: true }) popupzindex: string = "";
  @Prop({ reflect: true }) popupnoshadow: boolean;

  @Event({ bubbles: true, composed: true }) timeChanged: EventEmitter<string>;

  timePickerPopup = null;
  popup = null;

  @Watch("time")
  watchHandler(newValue: string) {
    this.timeChanged.emit(newValue);
  }

  @Listen("click", { target: "window" }) handleInput() {
    this.showHideTimePickerModal("", null);
  }

  componentWillLoad = () => {
    this.popup = document.createElement("cut-wc-popup");
    this.popup.top = this.popuptop;
    this.popup.left = this.popupleft;
    this.popup.width = this.popupwidth;
    this.popup.zindex = this.popupzindex;
    this.popup.noshadow = false;

    const timePickClock = document.createElement("cut-wc-time-picker-clock");
    timePickClock.time = this.time;
    this.popup.appendChild(timePickClock);
    this.timePickerPopup = document.body.appendChild(this.popup);

    timePickClock.onclick = (event: Event) => {
      event.stopPropagation();
      this.time = timePickClock.time;
    };
  };

  showHideTimePickerModal = (val: string, event: Event) => {
    event ? event.stopPropagation() : null;
    let el: HTMLElement = this.popup;
    if (val) el.setAttribute("open", val);
    else el.removeAttribute("open");
  };

  render() {
    return (
      <div class="wrapper">
        <cut-wc-input
          readonly
          icon="access_time"
          value={this.time}
          onClick={this.showHideTimePickerModal.bind(this, "yes")}
          guideline={this.guideline}
        ></cut-wc-input>
      </div>
    );
  }
}
