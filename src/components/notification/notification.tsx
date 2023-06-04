import {
  Component,
  h,
  Prop,
  Event,
  EventEmitter,
  Method,
  Element
} from "@stencil/core";

@Component({
  tag: "cut-wc-notification",
  styleUrl: "notification.scss",
  shadow: true
})
export class CutNotification {
  @Prop({ reflect: true }) open: boolean = null;
  @Prop({ reflect: true }) success: boolean = null;
  @Prop({ reflect: true }) warn: boolean = null;
  @Prop({ reflect: true }) error: boolean = null;
  @Prop({ reflect: true }) info: boolean = null;

  @Element() el: HTMLElement;

  @Event({ bubbles: true, composed: true }) close: EventEmitter<boolean>;

  @Method() async show() {
    this.close.emit(true);
    this.el.setAttribute("open", "1");
  }

  @Method() async hide() {
    this.close.emit(false);
    this.el.removeAttribute("open");
  }

  clickHandler = () => {
    this.hide();
  };

  render() {
    return (
      <div class="wrapper">
        <div class="notification-area">
          <span class="icon">
            {this.success ? <cut-wc-icon icon="check"></cut-wc-icon> : null}
            {this.warn ? <cut-wc-icon icon="feedback"></cut-wc-icon> : null}
            {this.error ? <cut-wc-icon icon="error"></cut-wc-icon> : null}
            {this.info ? <cut-wc-icon icon="info_outline"></cut-wc-icon> : null}
          </span>
          <div class="main">
            <slot />
          </div>
        </div>
        <div onClick={this.clickHandler} class="close">
          <span>x</span>
        </div>
      </div>
    );
  }
}
