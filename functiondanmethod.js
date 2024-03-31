//function dan method adalah 2 hal yang berbeda
//method adalah ketika menambhakan function pada suatu object property


//function biasa
function myFun() {
    console.log('Hi');
    return 'Hello';
};


const myMath = {
    perkalian: function(x, y) {
        return x * y;
    }
};
