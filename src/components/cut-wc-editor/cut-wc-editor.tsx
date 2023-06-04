import { Component, Event, EventEmitter, h, Prop, State } from "@stencil/core";
import { RawEditorSettings } from "../../assets/js/tinymce/tinymce.js";
import { getAssetsPath } from "../../utils/file-handler.js";

@Component({
  tag: "cut-wc-editor",
  styleUrl: "cut-wc-editor.scss",
  shadow: false,
})
export class CutWcEditor {
  @Prop() editorId: string;
  @Prop() html: string = "";
  @Prop() inline: boolean = true;
  @Prop() menubar: boolean = false;
  @Prop() plugins: string[] = ["link"];
  @Prop() toolbar: string[] = ["undo redo | link"];
  @Prop() valid_elements: string;
  @Prop() valid_styles: any;
  @Prop() powerpaste_word_import: string = "clean";
  @Prop() powerpaste_html_import: string = "clean";

  @State() editor: any;
  @Event({ bubbles: true, composed: true }) htmlChange: EventEmitter;
  @Event({ bubbles: true, composed: true }) getKeyInput: EventEmitter;
  @Event({ bubbles: true, composed: true }) getEditor: EventEmitter;

  render() {
    return (
      <div>
        <script src={getAssetsPath() + "js/tinymce/tinymce.min.js"}></script>
        <div class="space" id={"inner_" + this.editorId}>
        </div>
      </div>
    );
  }

  componentDidLoad() {
    (window as any).tinymce = undefined;
    var el = document.createElement('p');
    el.innerHTML = this.html;
    var ele = document.getElementById("inner_" + this.editorId);
    ele.appendChild(el);

    var options = {
      target: ele,
      // selector: `#inner_${this.editorId}`,
      menubar: this.menubar,
      inline: this.inline,
      setup: (editor) => {
        editor.on('init', () => {
          editor.setContent(this.html);
        });
        editor.on("blur", () => {
          this.htmlChange.emit(editor.getContent());
        });
        editor.on("keyUp", () => {
          this.getKeyInput.emit(editor.getContent());
        });
      },
      init_instance_callback : (editor => {
        this.editor = editor;
        this.getEditor.emit(editor);
      }),
      plugins: this.plugins,
      toolbar: this.toolbar,
      valid_elements: this.valid_elements,
      valid_styles: this.valid_styles,
      powerpaste_word_import: this.powerpaste_word_import,
      powerpaste_html_import: this.powerpaste_html_import,
    } as RawEditorSettings;

    this.init(options);
  }

  init(options: RawEditorSettings) {
    if (!(window as any).tinymce) {
      setTimeout(() => this.init(options), 100);
    } else {
      console.log("initialized");
      (window as any).tinymce.init(options);
    }
  }
}
