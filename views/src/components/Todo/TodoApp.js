"use strict";

import React, {Component} from "react";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

let _toggleItemList = (todos, id) => {
    let target = todos.find((todo) => {
        return todo.id === id;
    });
    target.checked = !target.checked;
    return todos;
}

let _deleteItemList = (todos, id) => {
    let idx = todos.findIndex((todo) => {
        return todo.id === id;
    });
    todos.splice(idx, 1);
    return todos;
}

let _createItem = (todos, title) => {
    let idx = todos.length ? todos[todos.length - 1].id + 1 : 100;
    todos.push({
        id: idx,
        title: title,
        checked: false
    });
    return todos;
}

class TodoApp extends Component {

    constructor(){
        super();
        this.state = {
            todos: [{
                id: 100,
                title: "单点突破",
                checked: false
            },{
                id: 101,
                title: "打造个人VIP",
                checked: true
            },{
                id: 102,
                title: "双管齐下",
                checked: false
            }]
        }

    }

    render(){

        const {todos} = this.state;

        let todoCount = todos.filter((todo) => {
            return !todo.checked;
        }).length;

        return (
            <div>
                <TodoHeader name="王芬" todoCount={todoCount}/>
                <TodoInput onKeyDown={(e) => {
                    if (e.keyCode === 13 && e.target.value != "") {
                        this.setState({
                            todos: _createItem(todos, e.target.value)
                        });
                        e.target.value = "";
                    }
                }}
                autoFocus={true}/>
                <TodoList
                    todos={todos}
                    toggleItemList={(id) => {
                        this.setState(() =>{
                            return {
                                todos: _toggleItemList(todos, id)
                            }
                        })
                    }}
                    deleteItemList={(id) => {
                        this.setState(() => {
                            return {
                                todos: _deleteItemList(todos, id)
                            }
                        })
                    }}
                />
            </div>
        );
    }
}

module.exports = TodoApp;