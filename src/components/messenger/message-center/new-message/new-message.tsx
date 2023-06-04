import {
  Component,
  h,
  Prop,
  Event,
  EventEmitter,
  Listen,
  State,
} from "@stencil/core";
import {
  ConfigModal,
  getDefaultInputData,
  NewMessageInputModal,
} from "../../../../shared/messenger-interface";

@Component({
  tag: "cut-message-new",
  styleUrl: "new-message.scss",
  shadow: true,
})
export class CutMessageNew {
  @Prop() inputData: NewMessageInputModal = getDefaultInputData();
  @Prop() config: ConfigModal;
  inputElement: HTMLTextAreaElement;
  baseHeight: number = 16;

  @State() iconColorClass: string = "defaultColor";

  @Event({ bubbles: true, composed: true }) msgSubmit: EventEmitter<boolean>;

  handleInput = (event: Event) => {
    let element = event.target as HTMLTextAreaElement;
    if (element.value.trim().length > 0) {
      this.iconColorClass = "msgColor";
    } else {
      this.iconColorClass = "defaultColor";
    }
    this.inputData.value = element.value.trim();
    this.resizeInput();
  };

  handleInputOnKeyDown = (event: KeyboardEvent) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !this.config.newMessageInput.stopEnterToSend
    ) {
      event.preventDefault();
      this.resetAndEmitEvent();
    }
  };

  resizeInput() {
    if (this.config.newMessageInput.isResizable) {
      if (this.inputElement.value.length === 0) {
        this.inputElement.style.height =
          this.config.newMessageInput.minRows * this.baseHeight + "px";
      } else {
        if (this.config.newMessageInput.maxRows) {
          const rows = Math.floor(
            this.inputElement.scrollHeight / this.baseHeight
          );
          if (rows <= this.config.newMessageInput.maxRows) {
            this.inputElement.style.height =
              this.inputElement.scrollHeight + "px";
          }
        }
      }
    }
  }

  @Listen("emojiPicked") emojiPicked(event: CustomEvent) {
    const currentValue = this.inputElement.value + event.detail.emoji;
    this.inputElement.value = currentValue;
    this.inputData.value = currentValue;
    this.inputElement.focus();
  }

  resetAndEmitEvent = () => {
    if (this.inputData.value.length > 0) {
      this.inputElement.value = "";
      this.inputElement.rows = this.config.newMessageInput.minRows;
      this.inputElement.placeholder = this.inputData.label;
      this.iconColorClass = "defaultColor";
      this.msgSubmit.emit(true);
    }
  };

  clickHandler = () => {
    this.resetAndEmitEvent();
    this.inputElement.focus();
  };

  render() {
    return (
      <div class="new-message-wrapper">
        <div class="new-message">
          <textarea
            ref={(el) => (this.inputElement = el as HTMLTextAreaElement)}
            name={this.inputData ? this.inputData.name : ""}
            placeholder={this.inputData ? this.inputData.label : ""}
            disabled={this.inputData ? this.inputData.disabled : false}
            readonly={this.inputData ? this.inputData.readonly : false}
            onInput={this.handleInput}
            onKeyDown={this.handleInputOnKeyDown}
            rows={
              this.config.newMessageInput.minRows
                ? this.config.newMessageInput.minRows
                : 1
            }
          ></textarea>
        </div>
        <div class="misc-wrapper">
          {!this.config.newMessageInput.hideEmoji ? (
            <div class="emoji icon-wrapper">
              <cut-wc-emoji></cut-wc-emoji>
            </div>
          ) : null}
          <div class="send icon-wrapper">
            <cut-wc-icon
              class={this.iconColorClass}
              onClick={this.clickHandler}
              icon="send"
            ></cut-wc-icon>
          </div>
        </div>
      </div>
    );
  }
}
