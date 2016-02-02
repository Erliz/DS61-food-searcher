import React from 'react';
import SuggestBox from './suggest/box';

let db = JSON.parse(require('./data.js').default);

require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap-material-design/dist/css/bootstrap-material-design.min.css');
require('bootstrap-material-design/dist/css/ripples.min.css');

require('styles/App.css');

require('imports-loader?jQuery=jquery!bootstrap-material-design/dist/js/material.min.js');
require('imports-loader?jQuery=jquery!bootstrap-material-design/dist/js/ripples.min.js');

// todo use ReactCSSTransitionGroup
// todo implement two way binding https://facebook.github.io/react/docs/two-way-binding-helpers.html

class AppComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <SuggestBox data={this.props.data} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
    data: db
};

export default AppComponent;
