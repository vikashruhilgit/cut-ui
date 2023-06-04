import { Component, h, Prop, EventEmitter, Event, State } from "@stencil/core";
import {
  Message,
  EventModal,
  SelectDropDownDataModal,
} from "../../shared/interface";

@Component({
  tag: "cut-wc-message",
  styleUrl: "./message.scss",
  shadow: false,
})
export class CutMessage {
  @Prop() templates: SelectDropDownDataModal[];
  @Prop() job: any;
  @Prop() message: Message = {
    title: "",
    body: "",
    greeting: "",
    templateName: "",
    sendSms: false,
    template: { value: "test" },
    isSaveAction: false,
    enableSendSms: false,
    filterTemplateName: ''
  };
  @Event({ bubbles: true, composed: true })
  deleteTemplate: EventEmitter<EventModal>;
  @Event({ bubbles: true, composed: true })
  saveTemplate: EventEmitter<EventModal>;
  @Event({ bubbles: true, composed: true })
  templateSelected: EventEmitter<EventModal>;
  @Event({ bubbles: true, composed: true }) valueChanges: EventEmitter<Message>;
  @Event({ bubbles: true, composed: true }) keyUpChanges: EventEmitter<Message>;

  @Event({ bubbles: true, composed: true })
  toggleSaveNewTemplate: EventEmitter<boolean>;
  @Event({ bubbles: true, composed: true }) getEditor: EventEmitter<any>;

  @State() openHint1 = false;
  @State() openHint2 = false;
  @State() toggleSaveTemplate = false;
  @State() hintData = {
    hint1: {
      label: "Increase Responses",
      desc:
        "Keep messages short and to point(50-125 words). This is just a begining of the conversation. <br><br>Always include your company name and a call to action. Avoid using all caps or excessive exclamation points",
    },
    hint2: {
      label: "Send as a text",
      desc:
        "Notify eligibile candidates by text message. Be sure to write clear, concise messages so candidates can respond by text.",
    },
  };

  deleteTemplateClickHandler = (event: any) => {
    this.deleteTemplate.emit(event);
  };

  saveTemplateClickHandler = (event: any) => {
    this.saveTemplate.emit(event);
  };

  toggleSaveTemplateHandler = () => {
    this.toggleSaveTemplate = !this.toggleSaveTemplate;
    this.toggleSaveNewTemplate.emit(this.toggleSaveTemplate);
  };

  toggleHint = (event: any) => {
    if (event.currentTarget.id === "hint1") {
      this.openHint1 = !this.openHint1;
    } else {
      this.openHint2 = !this.openHint2;
    }
  };

  selectTemplateHandler = (event: any) => {
    this.templateSelected.emit(event.detail);
  };

  getEditorHandler = (event) => {
    this.getEditor.emit(event.detail);
  }

  handleInputChange(event: any) {
    switch (event.target.id) {
      case 'title': {
        this.message = {
          ...this.message,
          title: event.target.value,
        };
        break;
      }
      case 'editor': {
        this.message = {
          ...this.message,
          body: event.detail,
        };
        break;
      }
      case 'sendSms': {
        this.message = {
          ...this.message,
          sendSms: event.target.checked,
        };
        break;
      }
      case 'greeting': {
        this.message = {
          ...this.message,
          greeting: event.target.value,
        };
        break;
      }
      case 'templateName': {
        this.message = {
          ...this.message,
          templateName: event.target.value,
        };
        break;
      }
    }
    this.valueChanges.emit(this.message);
  }

  handleKeyUpChange(event: any) {
    event.stopPropagation();
    switch (event.target.id) {
      case 'title': {
        this.message = {
          ...this.message,
          title: event.target.value,
        };
        break;
      }
      case 'editor': {
        this.message = {
          ...this.message,
          body: event.detail,
        };
        break;
      }
      case 'greeting': {
        this.message = {
          ...this.message,
          greeting: event.target.value,
        };
        break;
      }
      case 'templateSelect': {
        this.message = {
          ...this.message,
          filterTemplateName: event.detail,
        };
        break;
      }
    }
    this.keyUpChanges.emit(this.message);
  }

  getBodyCount() {
    const html = this.message.body;
    var divContainer = document.createElement("div");
    divContainer.innerHTML = html;
    const text = divContainer.textContent || divContainer.innerText || "";
    return text ? text.length : 0;
  }

  render() {
    return (
      <div class="message">
        <div class="message-header">
          <h3>Message</h3>
          <div id="hint1" onClick={this.toggleHint.bind(this)}>
            <cut-wc-icon icon="info"></cut-wc-icon>
          </div>
          <cut-wc-hint
            heading={this.hintData.hint1.label}
            open={this.openHint1}
            innerHTML={this.hintData.hint1.desc}
          ></cut-wc-hint>
        </div>
        <div class="body">
          <cut-wc-select
            id="templateSelect"
            label="Select Template"
            displayValue={
              this.message.template ? this.message.template.title : ""
            }
            dropDownData={this.templates}
            onSelectChange={this.selectTemplateHandler.bind(this)}
            enableAutoComplete={true}
            onKeyUpChanges={this.handleKeyUpChange.bind(this)}
          ></cut-wc-select>
          <div class="body-wrapper">
            <div class="left">
              <div class="inner-row style">Title</div>
              <div class="inner-row style">Greeting</div>
              <div class="inner-row style">Body</div>
            </div>
            <div class="right">
              <div class="inner-row">
                <input
                  id="title"
                  value={this.message.title}
                  placeholder="Title"
                  maxlength="360"
                  onBlur={this.handleInputChange.bind(this)}
                  onKeyUp={this.handleKeyUpChange.bind(this)}
                ></input>
                {this.message.title.length === 0 ? (
                  <small class="required">Title is Required</small>
                ) : null}
                <small class="countTitle">
                  {this.message.title ? this.message.title.length : 0}
                  /360
                </small>
              </div>
              <div class="inner-row">
                <input
                  id="greeting"
                  value={this.message.greeting}
                  placeholder="Greeting"
                  maxlength="360"
                  onBlur={this.handleInputChange.bind(this)}
                  onKeyUp={this.handleKeyUpChange.bind(this)}
                ></input>
                {this.message.greeting.length === 0 ? (
                  <small class="required">Greeting is Required</small>
                ) : null}
              </div>
              <div class="inner-row">
                <cut-wc-editor
                  id="editor"
                  editorId="editor"
                  html={this.message.body}
                  onGetEditor={this.getEditorHandler.bind(this)}
                  onHtmlChange={this.handleInputChange.bind(this)}
                  onGetKeyInput={this.handleKeyUpChange.bind(this)}
                ></cut-wc-editor>
                {this.message.body.length === 0 ? (
                  <small class="required body">Body is Required</small>
                ) : null}
                {this.job && this.job.jobTitle ? (
                  <cut-wc-message-job job={this.job}></cut-wc-message-job>
                ) : null}
              </div>
              <div class="center">
                <small>(Under 1000 characters recommended)</small>
                <small
                  class={
                    this.getBodyCount() === 0 || this.getBodyCount() > 1000
                      ? "item-2 error"
                      : "item-2"
                  }
                >
                  {this.getBodyCount()}/1000
                </small>
                {this.message.enableSendSms ? (
                  <div>
                   <cut-wc-checkbox
                     checked={this.message.sendSms}
                     id="sendSms"
                     primary
                     onInputUpdate={this.handleInputChange.bind(this)}
                   >
                     Send as SMS
                   </cut-wc-checkbox>
                   <cut-wc-icon
                     id="hint2"
                     icon="info"
                     onClick={this.toggleHint.bind(this)}
                   ></cut-wc-icon>
                   <cut-wc-hint
                     heading={this.hintData.hint2.label}
                     open={this.openHint2}
                     innerHTML={this.hintData.hint2.desc}
                   ></cut-wc-hint>
                 </div>
                ) : <div></div>}
                <div
                  class="action item-2"
                  onClick={this.toggleSaveTemplateHandler.bind(this)}>
                  <cut-wc-link class="link">Save Template</cut-wc-link>
                </div>
                {this.toggleSaveTemplate ? (
                  <div class="template-save">
                    <span class="label">Save Template as :</span>
                    <cut-wc-input
                      error={this.message.templateName.length === 0}
                      id="templateName"
                      value={this.message.templateName}
                      onInput={this.handleInputChange.bind(this)}></cut-wc-input>
                    <cut-wc-button
                      disabled={!this.message.deleteTemplateEnable}
                      class="p-r"
                      primary
                      size="small"
                      onClick={this.deleteTemplateClickHandler.bind(this)}>
                      Delete Template
                    </cut-wc-button>
                    <cut-wc-button
                      disabled={!this.message.saveTemplateEnable}
                      primary
                      size="small"
                      onClick={this.saveTemplateClickHandler.bind(this)}>
                      {this.message.isSaveAction ? 'Save' : 'Update'}
                    </cut-wc-button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
