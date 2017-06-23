"use strict";

import React, {Component, PropTypes} from 'react';

class Person extends Component {

    static get defaultProps() {
        return {
            name: "Hello",
            tel: "13331184066",
            qq: "8888888888"
        }
    }

    // static propTypes = {
    //     name: PropTypes.string.isRequired,
    //     tel: PropTypes.string.isRequired,
    //     qq: PropTypes.string.isRequired
    // }

    render() {

        return (
            <div>
                <h1>名字:{this.props.name}</h1>
                <h1>电话:{this.props.tel}</h1>
                <h1>QQ:{this.props.qq}</h1>
            </div>
        );
    }
}
// 不推荐写法
// Person.propTypes = {
//     name: PropTypes.string.isRequired,
//     tel: PropTypes.string.isRequired,
//     qq: PropTypes.string.isRequired
// }

// 设置默认值 不推荐
// Person.defaultProps = {
//     name: "Hello",
//     tel: "13331184066",
//     qq: "8888888888"
// }
// ES6 的写法
// export default Person;

// ES5 的写法
module.exports = Person;
