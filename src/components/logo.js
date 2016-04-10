import React from 'react';
import { orange500 } from 'material-ui/lib/styles/colors';
import VilaenThemeLight from './VilaenThemeLight';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

const themeStyle = getMuiTheme(VilaenThemeLight); 

const meetingStyle = {
    'font-size': '18px',
    'color': themeStyle.textColor,
    'text-shadow': '-1px 1px 3px black insert',
}

const easyStyle = {
    'font-family': 'Bradley Hand ITC',
    'font-size': '24px',
    'color': orange500,
    'font-weight': '900',
    'text-shadow': '1px 1px 3px rgba(0,0,0,.37)',    
}

const logoStyle = {
    'position': 'absolute',
    'top': '0',
    'left': themeStyle.appBar.height,
    'height': themeStyle.appBar.height,
    'line-height': themeStyle.appBar.height, 
    'overflow': 'hidden',
    'margin': 'auto 0',
    'width': 'auto', 
    'cursor': 'pointer',   
}

class Logo extends React.Component {
    render() {
        return (
            <div style={logoStyle}>
                <span style={meetingStyle}>meeting</span>
                <span style={easyStyle}>EASY</span>
            </div>
        );
    }
}

export default Logo;
