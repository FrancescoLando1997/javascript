function printname(){
    
    let helloName= "Hello John"
    
    function inner(){
        return helloName
    }
    return inner
}

setTimeout(printname, 1000)

console.log(printname()())