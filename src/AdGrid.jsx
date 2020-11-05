import React from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';
import clsx from 'clsx';

// Core
import { Grid, CardActionArea, Card, Typography } from '@material-ui/core';

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
        console.log(ad.snakeApiEndpoints[targetUrl]);
        axios.post(`${ad.snakeApiEndpoints[targetUrl]}/createAsset`,
          {
            id: assetId.split("."),
            advertisementId: ad.advertisementId,
            publisherId: ad.publisherId,
            advertiserId: ad.advertiserId,
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
        <div className={clsx(classes.gridContainer, classes.scrollbar )}>
            <Grid container justify="center" spacing={3} className={classes.adGrid}>
                {ads.map(ad => (
                    <Grid item xs={6} align="center" key={ad.advertisementId}>
                        <Card className={classes.adCard}>
                            <CardActionArea onClick={() => handleClick(ad)} className={classes.cardActionArea}>
                                <div className={classes.overlay}>
                                    <Typography color="secondary" variant="body2">
                                        {ad.advertiserId}
                                    </Typography>
                                </div>
                                <img src={ad.img} width="400" height="auto" />
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

AdGrid.propTypes = {
    ads: PropTypes.array.isRequired,
    handleCallback: PropTypes.func.isRequired,
};

export default AdGrid;