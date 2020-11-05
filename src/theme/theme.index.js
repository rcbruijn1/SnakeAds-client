import { createMuiTheme } from '@material-ui/core/styles';

// Colors
import {
  colorsDefault,
} from './colors';

export const THEMES = {
  defaultTheme: 'defaultTheme',
};

const colorsMap = {
  [THEMES.defaultTheme]: colorsDefault,
};

export const createTheme = name => createMuiTheme({
  palette: {
      ...colorsMap[name],
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: colorsDefault.primary.main,
      },
    },
  },
  scrollbar: {
    '&::-webkit-scrollbar': {
      width: 10,
      background: 'rgba(255, 255, 255, 0.12) !important',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(255, 255, 255, 0.41) !important',
      borderRadius: 2,
    },
  },
  border: (color, width = 1, style = 'solid') => `${width}px ${style} ${color}`,
});
