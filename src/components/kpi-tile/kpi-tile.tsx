import { Component, h, Prop } from "@stencil/core";
import { KpiTileData, MessageType, StatusType } from '../../shared/interface';

@Component({
  tag: "cut-wc-kpi-tile",
  styleUrl: "kpi-tile.scss",
  shadow: true
})
export class CutKpiTile {
  @Prop() data: KpiTileData;

  render() {
    return (
      this.data.inContainer ?
        <div class="cut-container-kpi-tile">
          <div>
            {this.data.title ? (
              <div class="cut-kpi-title">
                {this.data.title}
                {this.data.showIndicator ? (
                  <span class="cut-kpi-indicator"></span>
                ) : <span class="m-l-5"></span>}
                {this.data.popupInfo ? (
                  <cut-wc-tooltip icon={this.data.popupInfo.icon} {...(this.data.popupInfo.position ? { [this.data.popupInfo.position]: true } : {})}>{this.data.popupInfo.text}</cut-wc-tooltip>
                ) : null}
              </div>
            ) : null}
            <div class="cut-kpi-body">
              {!this.data.message ? (
                <div class="cut-kpi-main-count">{this.data.mainCount}</div>
              ) : null}
              {this.data.secondaryCount ? (
                <div class="cut-kpi-secondary-count">{this.data.secondaryCount}</div>
              ) : null}
              {this.data.message ? (
                <div class={{
                  "cut-kpi-error-msg": this.data.messageType === MessageType.ERROR,
                  "cut-kpi-warn-msg": this.data.messageType === MessageType.WARN,
                  "cut-kpi-info-msg": ((this.data.messageType !== MessageType.ERROR) && (this.data.messageType !== MessageType.WARN))
                }}>{this.data.message}</div>
              ) : null}
            </div>
            {this.data.showProgressBar ? (
              <cut-wc-progress-bar onlyBar percentage={this.data.progressiveBarValue} {...(this.data.progressBarStyle ? { [this.data.progressBarStyle]: true } : {})}
                class="cut-kpi-progressbar"></cut-wc-progress-bar>
            ) : null}
            {this.data.infoText ? (
              <div class="cut-kpi-infotext">{this.data.infoText}</div>
            ) : null}
          </div>
          {this.data.auxData ? (<div class="align-right">
            {this.data.auxMainText ? (<div class={{
              "cut-aux-main-success": this.data.status === StatusType.SUCCESS,
              "cut-aux-main-error": this.data.status === StatusType.ERROR
            }}>
              {this.data.auxIconName ? (<span><cut-wc-icon icon={this.data.auxIconName}></cut-wc-icon></span>) : null}
              {this.data.auxMainText ? (<span> {this.data.auxMainText}</span>) : null}</div>) : null}
            {this.data.auxInfoText ? (<div class="cut-kpi-infotext">{this.data.auxInfoText}</div>) : null}
            {this.data.auxInfoSubText ? (<div class="cut-kpi-infotext">{this.data.auxInfoSubText}</div>) : null}
          </div>) : null}
        </div>
        :
        <div class="cut-kpi-tile">
          <div class="cut-kpi-body">
            <div class="cut-kpi-main-count">
              {!this.data.icon ? (
                <div class="cut-kpi-main-count">{this.data.mainCount}</div>
              ) : <cut-wc-icon icon={this.data.icon}></cut-wc-icon>}
            </div>
            {this.data.title ? (
              <div class="cut-kpi-title">
                {this.data.title}
                {this.data.showIndicator ? (
                  <span class="cut-kpi-indicator"></span>
                ) : <span class="m-l-5"></span>}
                {this.data.popupInfo ? (
                  <cut-wc-tooltip icon={this.data.popupInfo.icon} {...(this.data.popupInfo.position ? { [this.data.popupInfo.position]: true } : {})}>{this.data.popupInfo.text}</cut-wc-tooltip>
                ) : null}
                {this.data.infoText ? (
                  <div class="cut-kpi-infotext">{this.data.infoText}</div>
                ) : null}
              </div>
            ) : null}
          </div>
          {this.data.secondaryCount ? (
            <div class="cut-kpi-secondary-count">{this.data.secondaryCount}</div>
          ) : null}
          {this.data.showProgressBar ? (
            <cut-wc-progress-bar onlyBar percentage={this.data.progressiveBarValue} {...(this.data.progressBarStyle ? { [this.data.progressBarStyle]: true } : {})}
              class="cut-kpi-progressbar"></cut-wc-progress-bar>
          ) : null}
        </div>
    );
  }
}