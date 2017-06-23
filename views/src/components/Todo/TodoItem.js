"use strict";

import React, {Component} from "react";

class TodoItem extends Component {

    constructor() {
        super();
    }

    static get defaultProps(){
        return {
            type: "checkbox",
            checked: true,
            title: "重新定义",
            toggleItem: () => {},
            deleteItem: () => {}
        }
    }

    render() {
        const {
            type,
            checked,
            title,
            toggleItem,
            id,
            deleteItem
        } = this.props;
        return (
            <div>
                <input type={type} onChange={()=>{
                    toggleItem(id);
                }}
                checked={checked}/>
                <span>{title}</span>
                <button onClick={() => {
                    deleteItem(id);
                }}>X</button>
            </div>
        );
    }
}

module.exports = TodoItem;
