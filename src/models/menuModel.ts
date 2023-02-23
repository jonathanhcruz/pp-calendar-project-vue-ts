export interface MenuModel {
  title: string;
  active: boolean;
  path?: string;
  action?: () => void;
}
