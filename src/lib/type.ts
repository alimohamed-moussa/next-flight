import { IconName } from './IconType';

export interface MenuItem {
  icon: JSX.Element;
  link?: string;
  onClick?: () => void;
  title: string;
}
export interface TopBarProps {
  topbarColor: string;
  menuIconSize: number;
  menuIconColor: string;
  menuIconName: IconName;
  userIconSize: number;
  userIconColor: string;
  userIconName: IconName;
  logoWidth: number;
  logoHeight: number;
  logoColor: string;
  username: string;
  userEmail: string;
  userDataColor: string;
  TopListItems: MenuItem[];
  BottomListItems: MenuItem[];
}
export interface RapportCardProps {
  id: string;
  title: string;
  source: string;
  publishedDate: string;
  updatedDate: string;
  threatActors: string;
  sectors: string;
  geography: string;
  tags: string;
  resume: string;
}
export interface ArticleCardProps {
  id: string;
  image?: string;
  title: string;
  source: string;
  publishedDate: string;
  updatedDate: string;
  resume: string;
}

export interface ResultProps {
  id: string;
  image?: string;
  title: string;
  source: string;
  published_at: string;
  updated_at: string;
  headline: string;
}
export interface SortProps {
  title: string;
  data: string[];
  onChange: () => void;
  sortSelectedValue: string;
}

export type queryType = 'Csirt' | 'Article' | 'Risk' | 'Level_of_analysis' | 'Region' | 'Sector';
export type Locale = 'fr' | 'en';

export type MultipleSelectDataType = {
  id: string | number;
  name: string;
};
export interface MultipleSelectProps {
  title: string;
  data: MultipleSelectDataType[];
  value: MultipleSelectDataType[];
  onChange: (data: MultipleSelectDataType[]) => void;
  whiteParentBgColor?: boolean;
  checkedCheckboxColor?: string;
  checkboxBorderColor?: string;
  size?: number;
}
