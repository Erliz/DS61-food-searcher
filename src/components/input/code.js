import React from 'react';
import InputBase from './base';
import BootstrapInput from './bootstrap-input';

class Code extends InputBase {
    render() {
        return (
            <BootstrapInput
                onChange={super.onChange.bind(this)}
                value={this.props.value}
                name="Code"
                id="code"
                type="tel"
                maxLength="3"
                pattern="\d+" />
        )
    }
}

export default Code;
