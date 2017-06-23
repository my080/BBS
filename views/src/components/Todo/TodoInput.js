"use strict";

import React, {Component, PropTypes} from "react";

class TodoInput extends Component {

    constructor() {
        super();
    }

    static get defaultProps(){
        return {
            typeT: "text",
            placeholder: "请输入代办内容....",
            style: {
                width: 300,
                height: 30
            },
            onKeyDown:(e) => {},
            autoFocus: true
        }
    }

    render() {
        const {type, placeholder, style, onKeyDown, autoFocus} = this.props;
        return (
            <div>
                <input
                    type={type}
                    placeholder={placeholder}
                    style={style}
                    onKeyDown={onKeyDown}
                    autoFocus={autoFocus}
                />
            </div>
        );
    }
}

module.exports = TodoInput;
