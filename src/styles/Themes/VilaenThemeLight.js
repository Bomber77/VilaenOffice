import {
    blueGrey500,
    blueGrey700,
    blueGrey900,
    blueGrey50,
    pinkA200,
    grey100,
    grey500,
    darkBlack,
    white,
    darkWhite,
} from 'material-ui/lib/styles/colors';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

const VilaenThemeLight = getMuiTheme({
  palette: {
    primary1Color: blueGrey700,
    primary2Color: blueGrey900,
    primary3Color: blueGrey50,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkWhite,
    alternateTextColor: darkWhite,
  }    
});

export default VilaenThemeLight;