let InputMixin = {
    getDefaultProps: function () {
        return {
            value: '',
            onChange: function () {
            }
        };
    },
    componentWillReceiveProps: function (nextProps) {
        if (this.props.value != nextProps.value) {
            this.setState({
                value: nextProps.value
            });
        }
    },
    onChange: function (newValue) {
        this.props.onChange(newValue);
    }
};

export default InputMixin;
