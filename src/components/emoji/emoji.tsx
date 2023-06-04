import { Component, h, Event, EventEmitter, Prop } from "@stencil/core";
import { EmojiButton } from "@joeattardi/emoji-button";

@Component({
  tag: "cut-wc-emoji",
  styleUrl: "emoji.scss",
  shadow: true,
})
export class CutEmoji {
  picker: EmojiButton;
  element!: HTMLElement;
  @Event({ bubbles: true, composed: true }) emojiPicked: EventEmitter<{
    emoji?: string;
  }>;
  @Prop() labelFontSize: string;
  @Prop() labelColor: string;

  componentDidLoad() {
    this.picker = new EmojiButton({
      style: "twemoji",
    });
    this.picker.on("emoji", (selection) => {
      this.emojiPicked.emit(selection);
    });
  }

  handleClick = () => {
    this.picker.togglePicker(this.element);
  };

  render() {
    const style = {
      fontSize: this.labelFontSize ? this.labelFontSize : "inherit",
      color: this.labelColor ? this.labelColor : "inherit",
    };

    return (
      <cut-wc-icon
        style={style}
        ref={(el) => (this.element = el as HTMLElement)}
        onClick={this.handleClick}
        icon="sentiment_satisfied_alt"
      ></cut-wc-icon>
    );
  }
}
