import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

// Core
import { AppBar, Box, Button, Dialog, DialogActions, DialogContent, Toolbar, Typography, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import AdGrid from './AdGrid';

// Style
import { useAppStyles } from './App.style';

// Assets
import { snakeAds } from './ads';

const App = () => {
  const classes = useAppStyles();
  const [clicks, setClicks] = useState(0);
  const [assets, setAssets] = useState(null);
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  
  const handleClickUpdate = response => {
    axios.get('http://snake-blockchain.westeurope.cloudapp.azure.com:3000')
    .then(res => {
      const assets = res.data;
      setClicks(assets.length);
      setAssets(assets);
      setSnackbar(true);
    })
  };

  useEffect(() => {
    handleClickUpdate();
}, []);


  return (
    <Fragment>
      <Box height="100vh" width="100vw" bgcolor="#465659" display="flex" flexDirection="column" alignItems="center" overflow="hidden">
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="secondary">
              Snake Ads Client
            </Typography>
              <Typography variant="body1" color="secondary">
                {`Clicks registered: ${clicks}`}
              </Typography>
          </Toolbar>
        </AppBar>
        <AdGrid handleCallback={handleClickUpdate} ads={snakeAds} />
      </Box>

      <Snackbar 
        open={snackbar} 
        autoHideDuration={4000} 
        onClose={() => setSnackbar(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Alert severity="success">
          Clicks are updated!
        </Alert>
      </Snackbar>
    </Fragment>
  );
}

export default App;
