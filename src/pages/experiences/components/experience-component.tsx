import { Alert, Card, CardContent, Chip, Stack, Tooltip, Typography } from "@mui/material";
import type { Experience } from "../../../types";

export type PropsExperience = {
    data: Experience
}

export function ExperienceComponent(props: PropsExperience) {

    const nowYear: number = new Date().getFullYear();

    return  <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5">
          { props.data.society.name }
        </Typography>
        <Typography variant="body2">
            {props.data.job}
            </Typography>
        <Typography variant="body2">
            De { props.data.startYear } à { props.data.endYear ? props.data.endYear : "maintenant"
          } <i>({  props.data.endYear ? (props.data.endYear! - props.data.startYear) : (nowYear - props.data.startYear) }
                    an(s))</i>                           
            </Typography>         

        { !props.data.endYear && <Alert severity="info">Poste actuellement occupé.</Alert>}

            <br/>
        <Typography variant="body1">
            {props.data.description}
        </Typography>

        <Stack direction={"row"} spacing={0.5} flexWrap={"wrap"}>
            {props.data.tags.map((element, index) => <Tooltip title="Add" placement="top"><Chip label={element.label} color={index % 2 === 0 ? "primary" : "secondary"} /></Tooltip>) }
        </Stack>

      </CardContent>
    </Card>
}