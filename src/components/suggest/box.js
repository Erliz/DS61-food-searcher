import React from 'react';
import $ from 'jquery';
import Code from '../input/code';
import Title from '../input/title';
import SuggestList from './list';

let SuggestBox = React.createClass({
    getDefaultProps: function() {
        return {
            data: [['000', 'food'], ['001', 'cort']],
            maxSuggestValues: 10
        };
    },
    getInitialState: function() {
        return {
            codeValue: '',
            titleValue: '',
            suggestValues: []
        };
    },
    updateDesign: function() {
         $.material.init();
    },
    componentDidMount: function() {
        this.updateDesign();
    },
    handleCodeChange: function(value) {
        var newState = {codeValue: value};
        if (value.length == 3) {
            var item = this.props.data.filter(function (dbItem) {
                return dbItem[0] == value;
            });
            if (item.length > 0) {
                newState.titleValue = item[0][1];
            }
        }
        this.setState(newState);
    },
    handleTitleChange: function(value) {
        var newState = {titleValue: value};
        if (value.length >= 3) {
            var expression = new RegExp(value, 'i');
            var items = this.props.data.filter(function (dbItem) {
                return expression.test(dbItem);
            });
            if (items.length > 0) {
                newState.suggestValues = items.slice(0, this.props.maxSuggestValues);
            }
        } else {
            if (this.state.suggestValues.length) {
                newState.suggestValues = [];
            }
        }
        this.setState(newState);
    },
    handleSuggestSelect: function(suggest) {
        this.setState({
            codeValue: suggest.code,
            titleValue: suggest.title,
            suggestValues: []
        })
    },
    render: function() {
        return (
            <form>
                <Code onChange={this.handleCodeChange} value={this.state.codeValue} />
                <Title onChange={this.handleTitleChange} value={this.state.titleValue}>
                    <SuggestList list={this.state.suggestValues} onSelect={this.handleSuggestSelect}/>
                </Title>
            </form>
        );
    }
});

export default SuggestBox;
