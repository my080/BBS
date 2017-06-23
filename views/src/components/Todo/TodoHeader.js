"use strict";

import React, {Component, PropTypes} from "react";

class TodoHeader extends Component {

    constructor() {
        super();
    }

    static get defaultProps() {
        return {
            name: "刘德华",
            todoCount: 0
        }
    }

    render() {
        const {name, todoCount} = this.props;
        return (
            <div>
                <h1>我的代办清单</h1>
                <h3>hello {name} 您有{todoCount}项未完成任务</h3>
            </div>
        );
    }
}

module.exports = TodoHeader;
