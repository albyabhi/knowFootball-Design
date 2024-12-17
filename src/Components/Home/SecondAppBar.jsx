import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const SecondAppBar = ({ onViewChange, selectedView }) => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'transparent', // No background color
          boxShadow: 'none', // Remove shadow
          padding: '0 16px',
        }}
      >
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Button
              color="inherit"
              onClick={() => onViewChange('matches')}
              sx={{
                backgroundColor: selectedView === 'matches' ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              Matches
            </Button>
            <Button
              color="inherit"
              onClick={() => onViewChange('live')}
              sx={{
                backgroundColor: selectedView === 'live' ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              Live
            </Button>
            <Button
              color="inherit"
              onClick={() => onViewChange('table')}
              sx={{
                backgroundColor: selectedView === 'table' ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              Table
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default SecondAppBar;
