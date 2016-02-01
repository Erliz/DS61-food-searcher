import React from 'react';

let BootstrapInput = React.createClass({
    getDefaultProps: function() {
        return {
            id: '',
            value: '',
            type: 'text',
            pattern: '*',
            maxLength: 524288,
            onChange: function(){}
        };
    },
    componentDidUpdate: function() {
        this._input.dispatchEvent(new Event('change', {'bubbles': true}));
    },
    onChange: function(e) {
        this.props.onChange(e.target.value);
    },
    render: function() {
        var id = 'focusedInput_' + this.props.id;
        return (
            <div className='form-group label-floating'>
                <label
                    className="control-label"
                    htmlFor={id}>{this.props.name}</label>
                <input
                    onChange={this.onChange}
                    className="form-control"
                    id={id}
                    autoComplete="off"
                    type={this.props.type} name={this.props.name.toLowerCase()}
                    pattern={this.props.pattern}
                    maxLength={this.props.maxLength}
                    value={this.props.value}
                    ref={(ref) => this._input = ref}/>
                {this.props.children}
            </div>
        )
    }
});

export default BootstrapInput;
