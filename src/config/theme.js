import { createMuiTheme} from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';

// A theme with custom primary and secondary color.
// It's optional.
const theme = {
    palette: {
        primary: {
            light: '#39796b',
            main: '#004d40',
            dark: '#00251a',
            contrastText: '#fff',
        },
        secondary: {
            light: '#484848',
            main: '#212121',
            dark: '#000000',
            contrastText: '#fff',
        }
    },
    typography: {
        useNextVariants: true,
    },
};

export default createMuiTheme(theme);