import { DropDownModal } from "./interface";

export interface FeedItem {
  initials: string;
  message: string;
  timestamp: string;
  title: string;
  id: string;
  read?: boolean;
  isClicked?: boolean;
  initialBackground?: string;
  sender_uid: string;
}

export type MessageType = 'job' | 'direct';

export interface JobMessageModal extends MsgDataModal {
  job_did: string;
  job_title: string;
  job_location: string;
  job_description: string;
  cta1_display: boolean;
  cta1_label: string;
  cta1_link_id: string;
  cta2_display: boolean;
  cta2_label: string;
  cta2_link_id: string;
}

export interface EventMessageModal extends MsgDataModal {
  event_id: string;
  event_title: string;
  event_description: string;
  event_location: string;
  event_start_time: string;
  event_end_time: string;
}
export interface MsgDataModal {
  created_time: string;
  text: string;
  sender_uid: string;
  type?: MessageType;
}

export interface NewMessageInputModal {
  name?: string;
  value?: string;
  label?: string;
  disabled?: boolean;
  readonly?: boolean;
  error?: boolean;
}

export function getDefaultInputData(): NewMessageInputModal {
  return {
    name: '',
    value: '',
    label: '',
    disabled: false,
    readonly: false,
    error: false
  }
}

export interface NewMessageInputConfigModal {
  hideEmoji?: boolean;
  isResizable?: boolean;
  maxRows?: number;
  minRows?: number;
  stopEnterToSend?: boolean;
  hide?: boolean;
}

export function getDefaultNewMessageInputConfig(): NewMessageInputConfigModal {
  return {
    hideEmoji: false,
    isResizable: true,
    maxRows: 5,
    minRows: 1,
    stopEnterToSend: false
  }
}

export interface ConfigModal {
  conversationHeader?: ConversationHeaderConfigModal;
  newMessageInput?: NewMessageInputConfigModal;
}

export function getDefaultConfig(): ConfigModal {
  return {
    conversationHeader: getDefaultConversationHeaderConfig(),
    newMessageInput: getDefaultNewMessageInputConfig()
  }
}

export interface MessengerDataModal {
  feedItems?: FeedItem[];
  feedSelectedId?: string;
  feedFilters?: DropDownModal[];
  msgActions?: DropDownModal[];
  currentUserId?: string;
  conversation?: MsgDataModal[] | JobMessageModal[] | EventMessageModal[] ,
  conversationHeader?: ConversationHeaderModal;
  newMsgInputData?: NewMessageInputModal,
  event?: MessengerEvents;
  newMsgLoader?: boolean;
  showScrollLoader?: boolean;
  conversationLoader?: boolean;
  showFeedLoader?: boolean;
  noDataMsgFeed: string;
  noDataMsgCenter: string;
  config?: ConfigModal;
}

export interface ConversationHeaderConfigModal {
  hideUserActivity?: boolean;
  isClickable?: boolean;
}

export function getDefaultConversationHeaderConfig(): ConversationHeaderConfigModal {
  return {
    hideUserActivity: false,
    isClickable: true
  }
}

export interface ConversationHeaderModal {
  header?: string;
  initials?: string;
  backgroundColor?: string;
  info?: string;
  userActivity?: UserActivityModal;
}

export interface UserActivityModal {
  isActive: boolean;
  lastActive: string;
}

export type MessengerEvents = 'feedItemClicked' |
  'msgSubmit' |
  'filterChange' |
  'actionUpdate' |
  'scrollEnded' |
  'scrollUpEnded' |
  'headerTitleClicked';
