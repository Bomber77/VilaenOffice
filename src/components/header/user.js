import React, { Component, PropTypes } from 'react';
import VilaenThemeLight from '../../styles/Themes/VilaenThemeLight';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

const themeStyle = getMuiTheme(VilaenThemeLight);

const UserStyle = {
    'width': themeStyle.appBar.height,
    'height': themeStyle.appBar.height,
    // 'background-color': 'rgba(0,0,0,0.17)',
    'dispaly': 'inline-block',
    'float': 'left',
};

const imageWidth = 0.618;

const imageStyle = {
    'width': themeStyle.appBar.height * imageWidth,
    'height': themeStyle.appBar.height * imageWidth,
    'margin': (themeStyle.appBar.height - themeStyle.appBar.height * imageWidth) / 2,
    'border-radius': '100%',
    // 'border': '1px solid rgba(255, 255, 255, 0.87)',
    'background-color': 'rgba(0,0,0,0.17)',
};

let yeoman = require('../../images/yeoman.png');

class User extends Component {
    render() {
        return (
            <div style={UserStyle}>
                <img style={imageStyle} src={yeoman}/>
            </div>
        )
    }
}


export default User;