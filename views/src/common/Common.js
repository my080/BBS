var Common = function () {

}

//Undefined、Null、Boolean、Number、String、object[Array, object]

Common.getType = function (obj) {
    var type = typeof obj;
    switch (type){
        case "object":
            if (obj.constructor == Object) {
                type = "Object";
            } else if (obj.constructor == Array) {
                type = "Array";
            }
            break;
        default:
    }
    return type;
}
