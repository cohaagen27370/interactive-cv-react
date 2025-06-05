import { Alert, Card, CardContent, Chip, Stack, Tooltip, Typography } from "@mui/material";
import type { Training } from "../../../types";

export type PropsTraining = {
    data: Training
}

export function TrainingComponent(props: PropsTraining) {
    return  <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5">
          { props.data.title }
        </Typography>
        <Typography variant="body2">
            {props.data.period}
        </Typography>
        <Typography variant="body2">
            {props.data.spec}
        </Typography>
      </CardContent>
    </Card>
}