import React from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';

// Core
import { Box, Grid, CardActionArea } from '@material-ui/core';

// Style
import { useAppStyles } from './App.style';

const AdGrid = ({ ads, handleCallback }) => {
    const classes = useAppStyles();

    const getRandomId = () => {
        let id = Math.random().toString();
        id = id.split('0.');
        return id[1];
    }

    const handleClick = ad => {
        const date = new Date()
        const assetId = getRandomId();

        const targetUrl = Math.floor(Math.random() * ad.snakeApiEndpoints.length);
        axios.post('http://localhost:3000/createAsset', 
          {
            id: assetId.split("."),
            advertisementId: ad.advertisementId,
            publisherId: ad.publisherId,
            timeStamp: date.toISOString(),
          })
          .then(function (response) {
              handleCallback(response);
              console.log(`Succesfuly saved on: ${ad.snakeApiEndpoints[targetUrl]}`, response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    return (
        <Box m={3}>
            <Grid container justify="center" spacing={3} className={classes.adGrid}>
                {ads.map(ad => (
                    <Grid item xs={3} align="center">
                        <CardActionArea onClick={() => handleClick(ad)} className={classes.cardActionArea}>
                            <img src={ad.img} width="200" height="auto" />
                        </CardActionArea>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

AdGrid.propTypes = {
    ads: PropTypes.array.isRequired,
    handleCallback: PropTypes.func.isRequired,
};

export default AdGrid;