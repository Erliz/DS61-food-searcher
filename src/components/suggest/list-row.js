import React from 'react';

let SuggestListRow = React.createClass({
    onFocus: function () {
        this.props.onSelect({code: this.props.code, title: this.props.title})
    },
    render: function () {
        return (<li onClick={this.onFocus} ><a href="javascript:void(0)">{this.props.title}</a></li>)
    }
});

export default SuggestListRow;
