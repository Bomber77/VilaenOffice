import React, { Component, PropTypes } from 'react';
import { LeftNav } from 'material-ui';

class LeftNavBar extends Component() {
    render() {
        return (
            <div>
                <LeftNav
                    width={300}
                    docked={false}
                    open={true}
                    />
            </div>
        )
    }
}

export default LeftNavBar;