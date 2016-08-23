import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/lib/icon-button';
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';
import { AppBar, Tabs, Tab, Avatar } from 'material-ui';
import Logo from './Logo';
import User from './user';

import VilaenThemeLight from '../../styles/Themes/VilaenThemeLight';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';


const themeStyle = getMuiTheme(VilaenThemeLight);
const spaceOfTabsRight = 2; 

const tabsContainerStyle = {
    'position': 'absolute',
    'dispaly': 'inline-block',
    'float': 'left',
    'right': themeStyle.appBar.height * spaceOfTabsRight,
    'height': themeStyle.appBar.height,
    'line-height': themeStyle.appBar.height, 
    'overflow': 'hidden',
}; 

const tabsStyle = {
    
};

class Header extends Component {

    render() {
        return (
            <AppBar iconElementLeft={<IconButton onClick={this.props.onMainMenuClick}><NavigationMenu /></IconButton>}>
                <Logo />
                <div style={tabsContainerStyle}>
                    <Tabs>
                        <Tab label="Booking">
                        </Tab>
                        <Tab label="Build Room">
                        </Tab>
                    </Tabs> 
                </div>
                <User />
            </AppBar>
        )

    }
}

Header.propTypes = {
    onMainMenuClick: PropTypes.object,
};

export default Header;