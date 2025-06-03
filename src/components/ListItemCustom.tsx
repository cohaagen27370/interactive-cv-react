import { ListItemIcon, ListItemText, ListItemButton, ListItem } from "@mui/material";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";


export type ListItemCustomProps = {
    label: string,
    route: string,
    isOpen: boolean,
    icon : ReactNode
}

export function ListItemCustom(props: ListItemCustomProps) {
    const navigate = useNavigate();
    const theicon = props.icon;

    return  <ListItem key={ props.label } disablePadding sx={{ display: 'block' }}>
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
              onClick={() => navigate(props.route)} >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    props.isOpen
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {theicon}
                </ListItemIcon>
                <ListItemText
                  primary={ props.label }
                  sx={[
                    props.isOpen
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>;
}