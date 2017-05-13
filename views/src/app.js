'use strict';

import "./style/style.less";
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
// import imageData from './data/image.json';
require('./style/style.less');

var App = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>
    }
});

ReactDOM.render(<App name="dfdfdf" />, document.getElementById("container"));