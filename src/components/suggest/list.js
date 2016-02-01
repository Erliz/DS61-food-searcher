import React from 'react';
import SuggestListRow from './list-row';

let SuggestList = React.createClass({
    onSelect: function(suggest) {
        this.props.onSelect(suggest);
    },
    updateDesign: function() {
        // $.material.ripples('li');
    },
    getDefaultProps: function() {
        return {
            list: []
        }
    },
    componentDidUpdate: function() {
        this.updateDesign();
    },
    componentDidMount: function() {
        this.updateDesign();
    },
    render: function() {
        if (!this.props.list.length) {
            return false;
        }
        var list = this.props.list.map(function(item){
            return <SuggestListRow key={item[0]}  title={item[1]} code={item[0]} onSelect={this.onSelect} />
        }.bind(this));

        return (<ul className="dropdown-menu">{list}</ul>)
    }
});

export default SuggestList;
