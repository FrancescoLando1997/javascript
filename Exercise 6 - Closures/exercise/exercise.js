function printname(){
    
    let helloName= "Hello John"
    
    function inner(){
        return helloName
    }
    return inner
}

console.log(printname()())