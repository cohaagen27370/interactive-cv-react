import {
  Stack,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';
import { BeingPage } from '../being';
import { ExperiencesPage } from '../experiences';
import { MonitoringPage } from '../monitoring';
import { PresentationPage } from '../presentation';
import { SkillsPage } from '../skills';
import { TrainingPage } from '../trainings';
import MenuIcon from '@mui/icons-material/Menu';
import MiniDrawer from '../../components/Drawer';
import { BasePage } from '../base';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useRef } from 'react';
import './layout.css';
import { PageProvider } from './page-context';

export function Layout() {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <PageProvider>
      <Stack
        alignContent={'space-around'}
        direction={'column'}
        flexGrow={1}
        spacing={2}
      >
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
        <Stack
          spacing={5}
          alignContent={'space-around'}
          direction={'row'}
          flexGrow={1}
        >
          <MiniDrawer></MiniDrawer>

          <TransitionGroup className="transition-group-wrapper">
            <CSSTransition
              key={location.pathname}
              nodeRef={nodeRef}
              timeout={300}
              classNames="page-fade"
              mountOnEnter={false}
              unmountOnExit={true}
            >
              <div ref={nodeRef} className="page-wrapper">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <BasePage pageTitle={'Présentation - Blanquet Laurent'}>
                        <PresentationPage />
                      </BasePage>
                    }
                  />
                  <Route
                    path="/presentation"
                    element={
                      <BasePage pageTitle={'Présentation - Blanquet Laurent'}>
                        <PresentationPage />
                      </BasePage>
                    }
                  />
                  <Route
                    path="/trainings"
                    element={
                      <BasePage pageTitle={'Formations - Blanquet Laurent'}>
                        <TrainingPage />
                      </BasePage>
                    }
                  />
                  <Route
                    path="/experiences"
                    element={
                      <BasePage pageTitle={'Expériences - Blanquet Laurent'}>
                        <ExperiencesPage />
                      </BasePage>
                    }
                  />
                  <Route
                    path="/skills"
                    element={
                      <BasePage pageTitle={'Savoirs faire - Blanquet Laurent'}>
                        <SkillsPage />
                      </BasePage>
                    }
                  />
                  <Route
                    path="/being"
                    element={
                      <BasePage pageTitle={'Savoirs être - Blanquet Laurent'}>
                        <BeingPage />
                      </BasePage>
                    }
                  />
                  <Route
                    path="/monitoring"
                    element={
                      <BasePage pageTitle={'Veille & IA - Blanquet Laurent'}>
                        <MonitoringPage />
                      </BasePage>
                    }
                  />
                </Routes>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </Stack>
      </Stack>
    </PageProvider>
  );
}
