import React from 'react';

class InputBase extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (this.props.value != nextProps.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }
    onChange(newValue) {
        this.props.onChange(newValue);
    }
}

InputBase.defaultProps = {
    value: '',
    onChange() {}
};

export default InputBase;
