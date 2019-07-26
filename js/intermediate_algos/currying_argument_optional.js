function addTogether(x) {
    if( arguments.length === 2 && [...arguments].every( y => typeof y === 'number') ){
        return x + arguments[1];
    }else if( arguments.length === 1 && typeof arguments[0] === 'number' ){
        return function(y){
            if( typeof y === 'number'){
                return x + y;
            }
        }
    };
}

  
  console.log(addTogether(2,'3'));
  console.log(addTogether(2)('3'));

