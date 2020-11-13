/* var o = {
    a: 5,
    add: function (b){
        return this.a + b;
    },
    minus: function (b){
        return this.a - b;
    }
}; */

var o = (function(){
    var a = 5;
    return {
        add: function (b){
            return a + b;
        },
        minus: function (b){
            return a - b;
        }
    };
})();

