require('normalize.css');

import React from 'react';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import VilaenThemeLight from '../styles/Themes/VilaenThemeLight';
import { LeftNav } from 'material-ui';

import Header from './header/header';
// import LeftNavBar from './LeftNavBar/LeftNavBar';


class AppComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = props;
        this.toggleLeftNav = this.toggleLeftNav.bind(this);
    }

    toggleLeftNav() {
        console.log('open left nav.');
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={VilaenThemeLight}>
                <div>
                    <Header onMainMenuClick={this.toggleLeftNav} />
                    <LeftNav
                        width={300}
                        docked={false}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                        />
                </div>
            </MuiThemeProvider>
        );
    }
}

AppComponent.defaultProps = {
    open: false
};

export default AppComponent;
