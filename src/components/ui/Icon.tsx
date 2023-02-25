import * as React from 'react';
import Support from './library/Support';
import Logout from './library/Logout';
import Search from './library/Search';
import User from './library/User';
import Setting from './library/Setting';
import Notification from './library/Notication';
import Bookmark from './library/Bookmark';
// import App from '../library/App';
import Send from './library/Send';
import Download from './library/Download';
import Pin from './library/Pin';
import Document from './library/Document';
import News from './library/News';
import Globe from './library/Globe';
import FlatBookmark from './library/FlatBookmark';
import FillPin from './library/FillPin';
import Bug from './library/Bug';
import Malware from './library/Malware';
import Comment from './library/Comment';
import Folders from './library/Folders';
import Timeline from './library/Timeline';
import Charts from './library/Charts';
import Maps from './library/Maps';
import Close from './library/Close';
import { IconName } from '../../lib/IconType';
import Check from './library/Check';
// import ArrowUp from '../library/ArrowUp';
import ArrowDown from './library/ArrowDown';
import BasicDownload from './library/BasicDownload';
import Hamburger from './library/Hamburger';
import Filters from './library/Filters';

interface IconProps {
  name: IconName;
  color: string;
  size: number;
}

const Icon = ({ name, color, size }: IconProps): JSX.Element => {
  let component;
  switch (name) {
    case 'support':
      component = <Support color={color} size={size} />;
      break;
    case 'logout':
      component = <Logout color={color} size={size} />;
      break;
    case 'search':
      component = <Search color={color} size={size} />;
      break;
    case 'user':
      component = <User color={color} size={size} />;
      break;
    case 'setting':
      component = <Setting color={color} size={size} />;
      break;
    case 'notification':
      component = <Notification color={color} size={size} />;
      break;
    case 'bookmark':
      component = <Bookmark color={color} size={size} />;
      break;
    // case 'app':
    //   component = <App color={color} size={size} />;
    //   break;
    case 'send':
      component = <Send color={color} size={size} />;
      break;
    case 'download':
      component = <Download color={color} size={size} />;
      break;
    case 'pin':
      component = <Pin color={color} size={size} />;
      break;
    case 'document':
      component = <Document color={color} size={size} />;
      break;
    case 'news':
      component = <News color={color} size={size} />;
      break;
    case 'globe':
      component = <Globe color={color} size={size} />;
      break;
    case 'outlinedbookmark':
      component = <FlatBookmark color={color} size={size} />;
      break;
    case 'fillpin':
      component = <FillPin color={color} size={size} />;
      break;
    case 'bug':
      component = <Bug color={color} size={size} />;
      break;
    case 'malware':
      component = <Malware color={color} size={size} />;
      break;
    case 'comment':
      component = <Comment color={color} size={size} />;
      break;
    case 'folders':
      component = <Folders color={color} size={size} />;
      break;
    case 'timeline':
      component = <Timeline color={color} size={size} />;
      break;
    case 'charts':
      component = <Charts color={color} size={size} />;
      break;
    case 'maps':
      component = <Maps color={color} size={size} />;
      break;
    case 'close':
      component = <Close color={color} size={size} />;
      break;
    case 'check':
      component = <Check color={color} size={size} />;
      break;
    // case 'arrow-up':
    //   component = <ArrowUp color={color} size={size} />;
    //   break;
    case 'basic-download':
      component = <BasicDownload color={color} size={size} />;
      break;
    case 'hamburger':
      component = <Hamburger color={color} size={size} />;
      break;
    case 'arrow-down':
      component = <ArrowDown color={color} size={size} />;
      break;
    case 'filters':
      component = <Filters color={color} size={size} />;
      break;
    default:
      component = null;
  }
  return component as JSX.Element;
};
export default Icon;
