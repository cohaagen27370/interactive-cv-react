import { Card, CardContent, Rating, Stack, Typography } from "@mui/material";
import type { Skill } from "../../../types";
import StarIcon from '@mui/icons-material/Star';

export type PropsSkill = {
    data: Skill
}

export function SkillComponent(props: PropsSkill) {
    return <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          { props.data.title}
        </Typography>
            {
                props.data.content.map(element => 
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography variant="body1" >
                        { element.name }
                        </Typography>
                        <br/>
                        <Rating
                            name="hover-feedback"
                            value={5 * (element.level / 100)}
                            precision={1}
                            readOnly= {true}
                            getLabelText={() => element.name}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
                        <Typography variant="body1" >
                        { element.label }
                        </Typography>                        
                    </Stack>                   
                )

            }
      </CardContent>
    </Card>
}