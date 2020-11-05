import { fade, makeStyles } from '@material-ui/core';

export const useAppStyles = makeStyles(theme => ({

    toolbar: { 
        display: 'flex', 
        justifyContent: 'space-between' 
    },

    adGrid: {
        height: 'calc(100% - 96px)',
    },

    cardActionArea: {
        width: 400,
    },   
    
    gridContainer: {
        maxWidth: 1280,
        overflowX: 'hidden',
        overflowY: 'scroll',
        margin: theme.spacing(5),
    },

    scrollbar: theme.scrollbar,

    adCard: {
        position: 'relative',
        margin: theme.spacing(0, 2),
        display: 'flex',
        width: 'max-content',
    },

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: fade(theme.palette.primary.light, 0.82),
        display: 'flex',
        padding: theme.spacing(1, 2),
        width: '100%',
    },
}));
