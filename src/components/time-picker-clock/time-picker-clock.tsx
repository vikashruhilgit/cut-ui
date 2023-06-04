import { Component, h, Prop, Element } from "@stencil/core";
import { ITime, ampm as eAmpm } from "../../shared/interface";

@Component({
  tag: "cut-wc-time-picker-clock",
  styleUrl: "time-picker-clock.scss",
  shadow: true,
})
export class CutTimePickerClock {
  @Prop({ reflect: true }) open: string;
  @Prop({ reflect: true }) time: string;
  @Prop({ reflect: true }) currentTimePart: "hours" | "minutes" = "hours";
  @Prop({ reflect: true }) ampm: string = eAmpm.AM;

  @Element() el: HTMLElement;

  clockHandRotateStyle = {};
  oTime: ITime;

  componentWillLoad() {
    this.setTime();
  }

  componentWillUpdate() {
    this.setTime();
  }

  getTime = () => {
    let hour = null;
    let minute = null;
    let ampm: string = eAmpm.AM;

    if (!this.time || !this.parseTime()) {
      const currentTime = new Date();
      hour = currentTime
        .getHours()
        .toString()
        .replace(/^(\d)$/, "0$1");
      minute = currentTime
        .getMinutes()
        .toString()
        .replace(/^(\d)$/, "0$1");
    } else {
      let parsedTime = this.parseTime();
      hour = parsedTime[1];
      minute = parsedTime[2];
      ampm = parsedTime[3].toUpperCase();
    }
    this.buildTime({ hour: hour, minute: minute, ampm: ampm });
  };

  parseTime = () => {
    return this.time.match(
      /^([0-1]?[0-9]|2[0-3]):([0-5]?[0-9]):?[0-5]?[0-9]?\s+([A|P]M)?$/i
    );
  };

  buildTime = (time: ITime) => {
    if (time.hour) {
      if (parseInt(time.hour) > 12) {
        time.hour = (parseInt(time.hour) - 12).toString();
        time.ampm = eAmpm.PM;
      }
      time.hour = time.hour.toString().replace(/^(\d)$/, "0$1");
    }
    if (time.minute !== undefined) {
      time.minute = time.minute.toString().replace(/^(\d)$/, "0$1");
    }
    if (time.ampm) {
      this.ampm = time.ampm;
      time.ampm = time.ampm.toUpperCase();
    }

    this.oTime = { ...this.oTime, ...time };
    this.time = `${this.oTime.hour}:${this.oTime.minute} ${
      this.oTime.ampm ? this.oTime.ampm : eAmpm.AM
    }`;
  };

  setTime = () => {
    this.getTime();
    let clockHandDeg = 0;
    if (this.currentTimePart === "minutes") {
      clockHandDeg = parseInt(this.oTime.minute) * 6;
    }
    if (this.currentTimePart === "hours") {
      clockHandDeg = parseInt(this.oTime.hour) * 30;
    }
    this.clockHandRotateStyle = {
      transform: `rotateZ(${clockHandDeg}deg)`,
    };
  };

  clockClickHandler = (time: ITime) => {
    this.buildTime(time);
    this.setTime();
  };

  showHideTimePickerModal = () => {
    this.el.setAttribute("open", "");
  };

  timePartsSwitch = (timePart) => {
    this.currentTimePart = timePart;
    this.setTime();
  };

  closeTimePicker = () => {
    this.el.removeAttribute("open");
  };

  render() {
    let hoursDialHTML = null;
    let minutesDialHTML = null;

    hoursDialHTML = Array.from(Array(12).keys()).map((num) => (
      <li onClick={this.clockClickHandler.bind(this, { hour: num = num + 1 })}>
        <span>{num}</span>
      </li>
    ));
    minutesDialHTML = Array.from(Array(60).keys()).map((num) => (
      <li onClick={this.clockClickHandler.bind(this, { minute: num })}>
        <span>{num % 5 == 0 ? num : "|"}</span>
      </li>
    ));

    return (
      <div class="wrapper">
        <div class={`time-picker-container ${this.currentTimePart}`}>
          <div class="digital-time-container">
            <div class="digital-time">
              <span
                class="timePartHour"
                onClick={this.timePartsSwitch.bind(this, "hours")}
              >
                {this.oTime.hour}
              </span>
              :
              <span
                class="timePartMinute"
                onClick={this.timePartsSwitch.bind(this, "minutes")}
              >
                {this.oTime.minute}
              </span>
            </div>
            <div class={`ampm ${this.ampm.toLowerCase()}`}>
              <span
                class="am"
                onClick={this.clockClickHandler.bind(this, { ampm: eAmpm.AM })}
              >
                AM
              </span>
              <span
                class="pm"
                onClick={this.clockClickHandler.bind(this, { ampm: eAmpm.PM })}
              >
                PM
              </span>
            </div>
          </div>
          <div class="clock-container">
            <div class="clock">
              <div class="clock-hand" style={this.clockHandRotateStyle}>
                <span></span>
              </div>
              <ul class="hours-dial">{hoursDialHTML}</ul>
              <ul class="minutes-dial">{minutesDialHTML}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
