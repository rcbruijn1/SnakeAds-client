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
    axios.get(`http://localhost:3000`)
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
      <Box height="100vh" width="100vw" bgcolor="#f2f2f2" display="flex" justifyContent="space-between" alignItems="center" overflow="hidden">
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6">
              Snake Ads
            </Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box mr={2}>
                <Button variant="contained" color="secondary" onClick={() => setOpen(true)}>
                  Raw output
                </Button>
              </Box>
              <Typography variant="body1" color="initial">
                {`Clicks registered: ${clicks}`}
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <AdGrid handleCallback={handleClickUpdate} ads={snakeAds} />
      </Box>

      <Dialog open={open} maxWidth={false}>
        <DialogContent>
          <Typography variant="h6" paragraph>
            {`Total assets: ${assets && assets.length}`} 
          </Typography>
          {assets && assets.map(asset => (
            <Box py={2}>
              <Typography paragraph style={{widht: '100%'}}>
                {JSON.stringify(asset.Record)}
              </Typography>
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar 
        open={snackbar} 
        autoHideDuration={4000} 
        onClose={() => setSnackbar(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Alert severity="info">
          Clicks are updated!
        </Alert>
      </Snackbar>
    </Fragment>
  );
}

export default App;
