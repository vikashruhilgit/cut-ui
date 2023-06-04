// THESE CLASSES ARE CURRENTLY DUPED IN THE SITEMAP REPO __ WE SHOULD CONSIDER PULLING THESE INTO AN INTERFACES REPO
export interface CbMapMenu {
  title: string;
  list: CbMapItem[],
  metadata?: CbMapMetadata;
}

export interface CbMapNode {
  title: string;
  link?: string;
  divider?: boolean;
  highlightedLink?: string;
  newWindow?: boolean;
  // TBD
  // emitEvent?: boolean;
}

export interface CbMapDivider {
  divider: true;
}

export type CbMapItem = CbMapMenu | CbMapNode | CbMapDivider;

export const isDivider = (item: CbMapItem): item is CbMapDivider => {
  return (item as CbMapDivider).divider !== undefined
}

export const isMenu = (item: CbMapItem): item is CbMapMenu => {
  return (item as CbMapMenu).list !== undefined
}

export const isLink = (item: CbMapItem): item is CbMapNode => {
  return (item as CbMapNode).link !== undefined
}

export interface CbMapUserMetadata {
  headline: string;
  current_account_name: string;
  email: string;
  first_name: string;
  last_name: string;
};

export type CbMapMetadata = CbMapUserMetadata;
