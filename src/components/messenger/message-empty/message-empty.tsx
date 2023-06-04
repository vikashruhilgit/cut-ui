import { Component, h, Prop } from '@stencil/core';
import { getAssetsPath } from '../../../utils/file-handler';

@Component({
  tag: 'cut-wc-message-empty',
  styleUrl: 'message-empty.scss',
  shadow: true,
})
export class MessageEmpty {
  @Prop() noDataMsg: string = 'You do not have any conversations yet';
  @Prop() noWrapper: boolean = false;

  render() {
    return (
      <div class={this.noWrapper ? "full-height" : "full-height message-error"}>
        <div class="align-center">
          <div>
            <div>
              <img src={getAssetsPath() + "images/noConversations.png"} />
            </div>
            <div class="no-data-text">
              {this.noDataMsg}
            </div>
          </div>
        </div>
      </div>
    );
  }

}
