import React from 'react';
import InputMixin from './mixin';
import BootstrapInput from './bootstrap-input';

let Title = React.createClass({
    mixins: [InputMixin],
    render: function() {
        return (
            <BootstrapInput
                onChange={this.onChange}
                value={this.props.value}
                name="Title"
                id="title"
                type="text">
                {this.props.children}
            </BootstrapInput>
        )
    }
});

export default Title;
