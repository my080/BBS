"use strict";

const Actor = require("cqrs").Actor;

class Topic extends Actor {
    constructor(data){
        super({
            authorId: data.authorId,
            title:data.title,
            body:data.body,
            fine:false,
            top:false,
            createTime:Date.now(),
            updateTime:Date.now(),
            accessNum:0
        });
    }

    top(data, service) {
        service.apply('top');
    }

    untop(data, service) {
        service.apply("untop");
    }

    fine(data, service){
        service.apply('fine');
    }

    unfine(data, service) {
        service.apply("unfine");
    }

    access(data, service) {
        service.apply("access");
    }

    update(data, service) {
        service.app('update', {title:data.title, body:data.body});
    }

    when(event) {
        switch (event.name) {
            case "access":
                ++this._data.accessNum;
                break;
            case "top":
                this._data.top = true;
                break;
            case "untop":
                this._data.top = false;
                break;
            case "fine":
                this._data.fine = true;
                break;
            case "unfine":
                this._data.fine = false;
                break;
            case "update":
                this._data.title = event.data.title;
                this._data.body = event.data.body;
                this.updateTime = Date.now();
                break;
        }
    }
}

module.exports = Topic;
