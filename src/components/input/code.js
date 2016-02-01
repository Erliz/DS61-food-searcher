import React from 'react';
import InputMixin from './mixin';
import BootstrapInput from './bootstrap-input';

let Code = React.createClass({
    mixins: [InputMixin],
    render: function() {
        return (
            <BootstrapInput
                onChange={this.onChange}
                value={this.props.value}
                name="Code"
                id="code"
                type="tel"
                maxLength="3"
                pattern="\d+" />
        )
    }
});

export default Code;
