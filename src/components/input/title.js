import React from 'react';
import InputBase from './base';
import BootstrapInput from './bootstrap-input';

class Title extends InputBase {
    render() {
        return (
            <BootstrapInput
                onChange={super.onChange.bind(this)}
                value={this.props.value}
                name="Title"
                id="title"
                type="text">
                {this.props.children}
            </BootstrapInput>
        )
    }
}

export default Title;
