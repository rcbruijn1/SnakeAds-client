import { makeStyles } from '@material-ui/core';

export const useAppStyles = makeStyles(theme => ({

    toolbar: { 
        display: 'flex', 
        justifyContent: 'space-between' 
    },

    adGrid: {
        height: 'calc(100% - 96px)',
    },

    cardActionArea: {
        width: 200,
    },    
}));
