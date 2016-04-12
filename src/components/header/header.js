import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/lib/icon-button';
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';
import { AppBar } from 'material-ui';
import Logo from './Logo';


class Header extends Component {

    render() {
        return (
            <AppBar iconElementLeft={<IconButton onClick={this.props.onMainMenuClick}><NavigationMenu /></IconButton>}>
            </AppBar>
        )

    }
}

Header.propTypes = {
     onMainMenuClick: PropTypes.object,
};

export default Header;