"use strict";

import React, {Component, PropTypes} from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {

    constructor() {
        super();
    }

    static get defaultProps() {
        return {
            todos: [],
            toggleItemList: () => {},
            deleteItemList: () => {}
        }
    }

    render() {
        const { toggleItemList, todos, deleteItemList } = this.props;
        return (
            <ul>
                {
                    todos.map((todo) => {
                        return (
                            <li key={todo.id}>
                                <TodoItem
                                    id={todo.id}
                                    title={todo.title}
                                    checked={todo.checked}
                                    toggleItem={(id) => {
                                        toggleItemList(id);
                                    }}
                                    deleteItem={(id) => {
                                        deleteItemList(id);
                                    }}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

module.exports = TodoList;
