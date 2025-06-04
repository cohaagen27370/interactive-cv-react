import {
  ListItemIcon,
  ListItemText,
  ListItemButton,
  ListItem,
  Tooltip,
} from '@mui/material';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePage } from '../pages/layout/page-context';

export type ListItemCustomProps = {
  label: string;
  route: string;
  isOpen: boolean;
  icon: ReactNode;
};

export function ListItemCustom(props: ListItemCustomProps) {
  const navigate = useNavigate();
  const { page, changePage } = usePage();
  const theicon = props.icon;

  const handleNavigate = () => {
    navigate(props.route, { viewTransition: true });
    changePage(props.route);
  };

  return (
    <Tooltip title={props.label} placement="right">
      <ListItem key={props.label} disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={[
            {
              minHeight: 48,
              px: 2.5,
            },
            props.isOpen
              ? {
                  justifyContent: 'initial',
                }
              : {
                  justifyContent: 'center',
                },
          ]}
          onClick={handleNavigate}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              justifyContent: 'center',
              mr: props.isOpen ? 3 : 'auto',
              '& .MuiSvgIcon-root': {
                fontSize: page == props.route ? 30 : '10',
              },
            }}
          >
            {theicon}
          </ListItemIcon>
          <ListItemText
            primary={props.label}
            sx={{
              '& .MuiListItemText-primary': {
                fontWeight: page == props.route ? 'bold' : '100',
              },
              opacity: props.isOpen ? 1 : 0,
            }}
          />
        </ListItemButton>
      </ListItem>
    </Tooltip>
  );
}
