"use strict";

const Domain = require("cqrs");
const Actor = Domain.Actor;

class User extends Actor {
    constructor(data){
        super(data);
    }

    changeName(data,service) {
        service.apply("changeName", data);
    }

    when(event) {
        switch (event.name) {
            case "changeName":
                this._data.name = event.data.name;
                break;
        }
    }
}

const domain = new Domain();
domain.register(User);
domain.create("User", {name: "leo"}, function (err, json) {
   console.log(json);
});