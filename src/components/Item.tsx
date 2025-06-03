import { ContentCopy } from "@mui/icons-material";
import { MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";


export type ItemProps = {
    label: string,
    route: string,
    icon : ReactNode
}

export function Item(props: ItemProps) {
    const navigate = useNavigate();
    const theicon = props.icon;

    return <MenuItem>
        <ListItemIcon>
            {theicon}
        </ListItemIcon>
        <ListItemText onClick={() => navigate(props.route)}>{ props.label }</ListItemText>
    </MenuItem>;
}