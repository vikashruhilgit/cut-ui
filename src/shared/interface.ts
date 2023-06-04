export const CB_CDN = 'http://d3g7tb6xhtixy5.cloudfront.net';

export interface CardDropDownDataModal {
  title: string;
  linkId: string;
}
export interface SelectDropDownDataModal {
  title: string;
  value: string;
  id?: string;
  selected?: boolean;
}
export interface DropDownDataModal {
  list: DropDownModal[];
}
export type Statustype = "current" | "inactive" | 'complete' | "error";
export interface Step {
  label: string;
  status: Statustype;
}
export interface UserDropDownModal extends DropDownModal { }
export interface DropDownModal extends Partial<EventModal> {
  title: string;
  altTxt?: string;
  link?: string;
  isExternal?: boolean;
  newWindow?: boolean;
  emitEvent?: boolean;
  selected?: boolean;
  id?: string;
  highlightedLink?: string;
  list?: DropDownModal[];
  preventAnchorDefault?: boolean;
}
export interface UserInfoModal {
  first_name: string;
  email: string;
  current_account_name: string;
  last_name?: string;
  headline: string;
}

export interface FavoriteDropdownModal extends IconListDataModel { }
export interface FavoriteItemModal extends IconListItemDataModel { }

export interface mainLinkModal {
  link: string;
  newWindow?: boolean;
  emitEvent?: boolean;
  isExternal?: boolean;
}

export interface EventModal {
  origin: string;
}

export interface ShoppingCartModel extends EventModal {
  count: number;
}

export interface IconListItemDataModel {
  date?: string;
  dateLabel?: string;
  icon?: string;
  title?: string;
  link?: string;
  newWindow?: boolean;
  emitEvent?: boolean;
  isExternal?: boolean;
  emitEventByIcon?: boolean;
  unreadStatus?: boolean;
  address?: string;
  phone?: string;
  desc?: string;
}

export interface IconListDataModel extends Partial<EventModal> {
  count: string;
  icon?: string;
  heading?: string;
  list?: IconListItemDataModel[];
  mainLink?: mainLinkModal;
  mainLinkLabel?: string;
  topLabelColor?: string;
  topLabelSize?: string;
}

export interface commonDropdownModal {
  list: DropDownModal[];
  icon: string;
  showicon?: boolean;
  toplabel?: string;
};

export * from '../components/navigation/model';

export type PopupTooltipPosition = 'top' | 'right' | 'bottom' | 'left'
export class PopupTooltip {
  text: string = '';
  icon?: string;
  position?: PopupTooltipPosition
}

export const enum MessageType {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info'
}

export const enum StatusType {
  SUCCESS = 'success',
  ERROR = 'error'
}

export const enum ampm {
  AM = 'AM',
  PM = 'PM'
}

export type progressBarColor = 'primary' | 'warn';

export interface KpiTileData {
  title: string;
  mainCount?: number | string;
  secondaryCount?: number | string;
  infoText?: string;
  inContainer?: boolean;
  showIndicator?: boolean;
  message?: string;
  messageType?: MessageType;
  popupInfo?: PopupTooltip;
  link?: string;
  click?: string;
  isSelected?: boolean;
  isLoading?: boolean;
  icon?: string;
  showProgressBar?: boolean;
  progressiveBarValue?: string;  //  in %age. Eg: '15%'
  progressBarStyle?: progressBarColor;
  auxData?: boolean;
  status?: StatusType;
  auxMainText?: string;
  auxIconName?: string;
  auxInfoText?: string;
  auxInfoSubText?: string;
}

export interface ITime {
  hour: string,
  minute: string,
  ampm?: string
}

export type DropdownPosition = 'left' | 'right';
export interface FooterDataModal {
  logo?: string;
  tagLine?: string;
  list?: DropDownModal[];
  icons?: FooterIconModal[];
}

export interface FooterIconModal extends Partial<DropDownModal> {
  name?: string;
  description?: string;
  imagePath?: string;
  appIcons?: boolean;
  items?: FooterIconModal[];
}


export interface Fieldprops {
  name?: string;
  value?: string | [];
  disabled?: boolean;
  label?: string;
  readonly?: boolean;
  type?: string;
  require?: boolean;
  icon?: string
  guideline?: string;
  error?: boolean;
  success?: boolean;
  event?: Event;
  dropDownData?: SelectDropDownDataModal[];
  checked?: boolean
}

export interface Message {
  title: string;
  greeting: string;
  body: string;
  sendSms: boolean;
  templateName: string;
  deleteTemplateEnable?: boolean;
  saveTemplateEnable?: boolean;
  isSaveAction?: boolean;
  template?: any;
  enableSendSms?: boolean;
  filterTemplateName?: string;
}

export interface MessageJob {
  jobTitle: string;
  jobDesc: string;
  companyLocation: string;
  applyCta: string;
  detailCta: string
}
