import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icon from './Icon';
import { IconName } from '../../lib/IconType';
import { palette } from '../../lib/theme/palette';
import { fontSize, fontWeight } from '../../lib/theme/globals';

interface ActionMenuItem {
  icon: JSX.Element;
  name: string;
  iconColor: string;
  iconSize: number;
  onAction: () => void;
}

interface ActionMenuProps {
  data: ActionMenuItem[];
}

const ITEM_HEIGHT = 48;

const ActionMenu = ({ data }: ActionMenuProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label='more'
        id='action-button'
        aria-controls={open ? 'action-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id='action-menu'
        MenuListProps={{
          'aria-labelledby': 'action-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 190,
            '&.MuiMenuItem-root': {
              paddingLeft: '23px',
            },
          },
        }}
      >
        {data.map((item, index) => {
          return (
            <MenuItem key={item.name} onClick={item.onAction}>
              <ListItemIcon
                sx={{
                  '&.MuiListItemIcon-root': {
                    marginRight: '-8px',
                  },
                }}
              >
                <Icon
                  size={item.iconSize}
                  color={item.iconColor}
                  name={item.name as IconName}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  textTransform: 'capitalize',
                  fontSize: fontSize.md,
                  fontWeight: fontWeight.medium,
                  color: palette.somber.dark,
                }}
              >
                {item.name}
              </ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
export default ActionMenu;
