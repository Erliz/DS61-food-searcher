import React from 'react';
import $ from 'jquery';
import SuggestListRow from './list-row';

class SuggestList extends React.Component{
    onSelect(suggest) {
        this.props.onSelect(suggest);
    }
    updateDesign() {
         $.material.ripples('li');
    }
    componentDidUpdate() {
        this.updateDesign();
    }
    componentDidMount() {
        this.updateDesign();
    }
    render() {
        if (!this.props.list.length) {
            return false;
        }
        var list = this.props.list.map(function(item){
            return <SuggestListRow key={item[0]}  title={item[1]} code={item[0]} onSelect={this.onSelect.bind(this)} />
        }.bind(this));

        return (<ul className="dropdown-menu">{list}</ul>)
    }
}

SuggestList.defaultProps = {
    list: []
};

export default SuggestList;
