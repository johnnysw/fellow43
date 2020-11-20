

var util = (function(){

    return {
        getByClass: function (){
    
        },
        next: function (elem){
            do{
                elem = elem.nextSibling;
            }while(elem && elem.nodeType != 1);
            return elem;
        },
        first: function (elem){
            elem = elem.firstChild;
            return elem && elem.nodeType != 1 ? this.next(elem) : elem;

        }
    }
})();