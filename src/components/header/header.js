import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/lib/icon-button';
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';
import { AppBar, Tabs, Tab } from 'material-ui';
import Logo from './Logo';

import VilaenThemeLight from '../../styles/Themes/VilaenThemeLight';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

const themeStyle = getMuiTheme(VilaenThemeLight); 

const tabsContainerStyle = {
    'position': 'absolute',
    'height': themeStyle.appBar.height,
    'line-height': themeStyle.appBar.height, 
    'left': '40%',
    'overflow': 'hidden',
    'margin': '0 auto',
}; 

const tabsStyle ={
    
};

class Header extends Component {

    render() {
        return (
            <AppBar iconElementLeft={<IconButton onClick={this.props.onMainMenuClick}><NavigationMenu /></IconButton>}>
                <Logo />
                <div style={tabsContainerStyle}>
                    <Tabs>
                        <Tab label="Item One">
                        </Tab>
                        <Tab label="Item Two">
                        </Tab>
                    </Tabs>                
                </div>
            </AppBar>
        )

    }
}

Header.propTypes = {
    onMainMenuClick: PropTypes.object,
};

export default Header;