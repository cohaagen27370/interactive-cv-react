import { BusinessCenter, CardMembership , ContentPaste, Cloud, Portrait, Category, Difference, School } from "@mui/icons-material";
import { Stack, Box, AppBar, Toolbar, IconButton, Typography, Button, Paper, MenuList, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { BeingPage } from "../being";
import { ExperiencesPage } from "../experiences";
import { MonitoringPage } from "../monitoring";
import { PresentationPage } from "../presentation";
import { SkillsPage } from "../skills";
import { TrainingPage } from "../trainings";
import MenuIcon from '@mui/icons-material/Menu';
import MiniDrawer from "../../components/Drawer";

export function Layout(props: any) {

  return <Stack alignContent={'space-around'} direction={'column'} flexGrow={1} spacing={2}>
        <Box sx={{ flexGrow: 1 }}>
       <AppBar position="static">
         <Toolbar>
           <IconButton
             size="large"
             edge="start"
             color="inherit"
             aria-label="menu"
             sx={{ mr: 2 }}
           >
             <MenuIcon />
           </IconButton>
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             News
           </Typography>
           <Button color="inherit">Login</Button>
         </Toolbar>
       </AppBar>
     </Box>
  <Stack spacing={5} alignContent={'space-around'} direction={'row'} flexGrow={1}>
    <MiniDrawer></MiniDrawer>

    <Routes>
      <Route path="/" element={<PresentationPage />} />
      <Route path="/presentation" element={<PresentationPage />} />
      <Route path="/trainings" element={<TrainingPage />} />
      <Route path="/experiences" element={<ExperiencesPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/being" element={<BeingPage />} />
      <Route path="/monitoring" element={<MonitoringPage />} />
    </Routes>

  </Stack>
    </Stack>;
}