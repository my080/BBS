"use strict";

import 'core-js/fn/object/assign';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoApp from "./components/Todo/TodoApp";
import style from "./style/style.css";
import Css from "./components/css/Html";




// ES6 写法
ReactDOM.render(<TodoApp />, document.getElementById("container"));