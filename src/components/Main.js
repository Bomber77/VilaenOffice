require('normalize.css');

import React from 'react';
import IconButton from 'material-ui/lib/icon-button';
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import VilaenThemeLight from './VilaenThemeLight';
import { AppBar } from 'material-ui';
import Logo from './Logo';
 
function showLeftNav() {
    console.log('open left nav.');
}

class AppComponent extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={VilaenThemeLight}>
                <AppBar iconElementLeft={<IconButton onTouchTap={this.showLeftNav}><NavigationMenu /></IconButton>}>
                    <Logo/>
                </AppBar>
            </MuiThemeProvider>
        );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
