import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import { MessageJob } from "../../../shared/interface";

@Component({
  tag: "cut-wc-message-job",
  styleUrl: "job.scss",
  shadow: true,
})
export class CutMessageJob {
  @Prop() job: MessageJob;
  @Prop() fromMessageCenter: boolean = false;
  @Prop() message: string = '';

  @Event({ bubbles: true, composed: true }) clickApply: EventEmitter<any>;
  @Event({ bubbles: true, composed: true }) clickDetail: EventEmitter<any>;

  clickApplyEvent = (event: any) => {
    if (this.job.applyCta) {
      window.open(this.job.applyCta, '_blank');
    } else {
      this.clickApply.emit(event);
    }
  };

  getText(html: any) {
    var divContainer = document.createElement("div");
    divContainer.innerHTML = html;
    const text = divContainer.textContent || divContainer.innerText || "";
    return text && text.length > 0 ? text.slice(0, 240) + "..." : text;
  }

  clickDetailEvent = (event: any) => {
    if (this.job.detailCta) {
      window.open(this.job.applyCta, '_blank');
    } else {
      this.clickDetail.emit(event);
    }
  };

  render() {
    return (
      <div> { this.fromMessageCenter ?
        <div class="msg">
          <div class="content" innerHTML={this.message}></div>
        </div> : null}
        <div class={{
          "job message-center": this.fromMessageCenter,
          "job": !this.fromMessageCenter
        }}>
          <cut-wc-icon icon="work_outline"></cut-wc-icon>
          <div class="job-right">
            <span class="link">{this.job.jobTitle}</span>
            <span class="company">{this.job.companyLocation}</span>
            <span class="desc" innerHTML={this.getText(this.job.jobDesc)}></span>
          </div>
          <div class="actions">
            <cut-wc-button
              class="pd-r"
              tertiary
              size="medium"
              onClick={this.clickDetailEvent.bind(this)}
            >
              Job Details
            </cut-wc-button>
            <cut-wc-button
              accent
              size="medium"
              onClick={this.clickApplyEvent.bind(this)}
            >
              Apply Now
            </cut-wc-button>
          </div>
        </div>
      </div>
    );
  }
}
