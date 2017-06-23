"use strict";

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ShowEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textValue: "请输入内容。。。"
        };
    }

    static get defaultProps() {
        return {
            content: ""
        }
    }

    // static propTypes = {
    //     content: React.PropTypes.string.isRequired
    // }

    // ES5的写法
    changeTextValue() {
        let value = ReactDOM.findDOMNode(this.refs.textarea1).value;
        this.setState(function () {
            return {
                textValue: value
            }
    });
    }
    //
    // getDefaultProps() {
    //
    // }
    //
    // getInitialState() {
    //
    // }
    //
    // componentWillMount() {
    //
    // }
    //
    // render() {
    //
    // }
    //
    // componentDidMount() {
    //
    // }
    //
    // componentWillReceiveProps() {
    //
    // }
    //
    // shouldComponentUpdate() {
    //
    // }
    //
    // componentDidUpdate() {
    //
    // }
    //
    // componentWillUnmount() {
    //
    // }

    render() {
        return (
            <div>
                <h1>输入</h1>
                <i>测试</i>
                <textarea ref="textarea1" style={{width: 300, height: 100}} defaultValue={this.state.textValue} onChange={() => this.changeTextValue()}>

                </textarea>
                <h1>输出</h1>
                <p>{this.state.textValue}</p>
            </div>
        );
    }
}

module.exports = ShowEditor;