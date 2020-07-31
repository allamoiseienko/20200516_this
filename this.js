obj = {
    copy: function (string) {
        obj[string] = string;
        return this
    }, 
    target: function (property) {
        property = obj.result;
        console.log(property);
        return this
    },
    clear: function () {
        obj.result = 0;
            console.log(obj.result)
        return this
    }, 
    doFunction: function (func, x, y) {
        if (func == 'sum') {
            obj.result = x+y;
                console.log(obj.result);
                return this
            }
            else if (func == 'mul') {
                obj.result = x*y;
                console.log(obj.result);
                return this
            }
    },    
}
obj.doFunction('sum', 2, 4).doFunction('mul', 6, 3).clear();
obj.copy('buffer');
obj 
    .doFunction('sum', 2, 4) 
    .copy('some_name')
    .target('another_some_name')
    .doFunction('mul', 6, 3);