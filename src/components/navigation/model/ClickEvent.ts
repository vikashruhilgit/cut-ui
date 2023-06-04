export type NAVIGATION_EVENT = 'BETA_TOGGLE' | 'LOG_OUT';

export interface NavigationClickEvent {
  origin: NAVIGATION_EVENT;
  data: any;
}
