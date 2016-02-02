import React from 'react';

class SuggestListRow extends React.Component {
    onFocus () {
        this.props.onSelect({code: this.props.code, title: this.props.title})
    }
    render () {
        return (<li onClick={this.onFocus.bind(this)} ><a href="javascript:void(0)">{this.props.title}</a></li>)
    }
}

export default SuggestListRow;
