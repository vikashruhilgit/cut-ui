import { Component, h, Prop } from "@stencil/core";
import { EventMessageModal, JobMessageModal, MsgDataModal } from "../../../../../shared/messenger-interface";

@Component({
  tag: "cut-history-msg",
  styleUrl: "msg.scss",
  shadow: true,
})
export class CutHistoryMsg {
  @Prop() msg: JobMessageModal | EventMessageModal | MsgDataModal;
  @Prop() currentUserId: string;

  renderMsg = (msg: JobMessageModal | EventMessageModal | MsgDataModal) => {
    return (
      <div class="msg">
        { msg.type === 'job' ?
          <cut-wc-message-job
            message={msg.text}
            fromMessageCenter={true}
            job={{jobTitle: (msg as JobMessageModal).job_title,
              jobDesc: (msg as JobMessageModal).job_description,
              companyLocation: (msg as JobMessageModal).job_location,
              detailCta: (msg as JobMessageModal).cta1_link_id,
              applyCta: (msg as JobMessageModal).cta2_link_id}}
          ></cut-wc-message-job>:
         <div
          class={
            "content " + (msg.sender_uid === this.currentUserId ? "out" : "in")
         }
         innerHTML={msg.text}
       ></div>
         }
        <div class="msg-info">
          <span> {msg.created_time}</span>
        </div>
      </div>
    );
  };
  render() {
    return this.msg ? this.renderMsg(this.msg) : null;
  }
}
