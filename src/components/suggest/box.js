import React from 'react';
import $ from 'jquery';
import Code from '../input/code';
import Title from '../input/title';
import SuggestList from './list';

class SuggestBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codeValue: '',
            titleValue: '',
            suggestValues: []
        };
    }
    updateDesign() {
         $.material.init();
    }
    componentDidMount() {
        this.updateDesign();
    }
    handleCodeChange(value) {
        var newState = {codeValue: value};
        if (value.length == 3) {
            var item = this.props.data.filter((dbItem) => {
                return dbItem[0] == value;
            });
            if (item.length > 0) {
                newState.titleValue = item[0][1];
            }
        }
        this.setState(newState);
    }
    handleTitleChange(value) {
        var newState = {titleValue: value};
        if (value.length >= 3) {
            var expression = new RegExp(value, 'i');
            var items = this.props.data.filter((dbItem) => {
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
    }
    handleSuggestSelect(suggest) {
        this.setState({
            codeValue: suggest.code,
            titleValue: suggest.title,
            suggestValues: []
        })
    }
    render() {
        return (
            <form>
                <Code onChange={this.handleCodeChange.bind(this)} value={this.state.codeValue} />
                <Title onChange={this.handleTitleChange.bind(this)} value={this.state.titleValue}>
                    <SuggestList list={this.state.suggestValues} onSelect={this.handleSuggestSelect.bind(this)}/>
                </Title>
            </form>
        );
    }
}

SuggestBox.defaultProps = {
    data: [['000', 'food'], ['001', 'cort']],
    maxSuggestValues: 10
};

export default SuggestBox;
