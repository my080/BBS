"use strict";

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import style from "./css/style.css";

class Html extends Component {

    drawYuan() {
        return (
            <div className={top_ban_yuan}></div>
        );
    }

    render() {
        return (
            <p>右下角向左上角的线性渐变背景</p>
        )
    }
}
