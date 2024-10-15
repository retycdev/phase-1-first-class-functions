function receivesAFunction(callback){
     callback() //call the passed fn

}

function returnsANamedFunction(){
    return function NamedFunction(){} //return named fn
}

function returnsAnAnonymousFunction(){
    return function(){} //return anonymous fn
}