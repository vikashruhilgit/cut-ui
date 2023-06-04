import { Component, h, Prop, EventEmitter, Event } from "@stencil/core";
import { Step, Statustype } from "../../shared/interface";

@Component({
  tag: "cut-wc-stepper",
  styleUrl: "stepper.scss",
  shadow: true,
})
export class CutStepper {
  @Prop({ reflect: true }) nonLinear: boolean = false;
  @Prop({ reflect: true }) vertical: boolean;
  @Prop() steps: Step[];
  @Prop() emitEvent: boolean = false;

  @Event({ bubbles: true, composed: true }) clicked: EventEmitter<Step>;

  clickHandler = (data: Step) => {
    this.clicked.emit(data);
  };

  render() {
    let stepHtml = null;
    let barWidth = "100%";
    let verticalHeight = "100%";
    if (this.steps) {
      let currentElement = 0;
      stepHtml = this.steps.map((single, index) => {
        let currentIndexStaus = single.status as Statustype;
        if (currentIndexStaus === "current") {
          currentElement = index;
        }
        let iconHtml = <span>{index + 1}</span>;
        let errorClass = "";
        if (currentIndexStaus === "complete") {
          iconHtml = (
            <span>
              <cut-wc-icon icon="check"></cut-wc-icon>
            </span>
          );
        } else if (currentIndexStaus === "error") {
          errorClass = "error";
          iconHtml = (
            <span>
              <cut-wc-icon icon="priority_high"></cut-wc-icon>
            </span>
          );
        }

        return (
          <div class="step-wrapper">
            {this.emitEvent && currentIndexStaus === "complete" ? (
              <div
                onClick={this.clickHandler.bind(this, single)}
                class={currentIndexStaus + " step " + errorClass + " link"}
              >
                {iconHtml}
              </div>
            ) : (
              <div class={currentIndexStaus + " step " + errorClass}>
                {iconHtml}
              </div>
            )}
            <div
              class={
                currentIndexStaus === "current" ? "label current" : "label"
              }
            >
              {single.label}
            </div>
          </div>
        );
      });

      if (!this.nonLinear) {
        if (currentElement === this.steps.length - 1) {
          barWidth = "100%";
        } else {
          barWidth =
            "calc((((100%/" +
            (this.steps.length - 1) +
            ")* " +
            currentElement +
            ") + 10%)";
        }
      }

      if (this.vertical) {
        verticalHeight =
          this.steps.length * 30 + (this.steps.length - 1) * 20 + "px";
        if (!this.nonLinear) {
          if (currentElement === this.steps.length - 1) {
            barWidth = (currentElement + 1) * 30 + currentElement * 20 + "px";
          } else {
            barWidth =
              (currentElement + 1) * 30 + currentElement * 20 + 5 + "px";
          }
        }
      }
    } else {
      return null;
    }

    return (
      <div class="wrapper">
        <div class="steps">{stepHtml}</div>
        <div class="bar" style={{ width: verticalHeight }}>
          <cut-wc-progress-bar
            primary={this.nonLinear ? false : true}
            onlyBar
            heading="Label"
            percentage={barWidth}
          ></cut-wc-progress-bar>
        </div>
      </div>
    );
  }
}
