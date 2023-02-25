// Normal functions: 
    function product(p1, p2) {
        return p1 * p2;
    }

    console.log(product(2,5))

    // function can be used as variable values
    let text = "Product of the numbers is: " + product(2,3)
    console.log(text)


    console.log(product) // 'product' is function object
    console.log(product(3,4)) // while 'product()' is function result

// Arrow functions:
    let sum = (a, b) => a + b // function with 2 arguments

    let isPositive = number => number >= 0 // function with 1 argument

    let randomNUmber = () => Math.random

    // Anonymous function -> function with no name
    document.addEventListener('click', function(){
        console.log("Click")
    })

    document.addEventListener('click', () => console.log('Click'))

    // Example:
    class Person {
        constructor(name) {
            this.name = name
        }

        printNameArrow() {
            setTimeout(() => {
                console.log('Arrow: ' + this.name)
            }, 100)
        }

        printNameFunction() {
            setTimeout(function() {
                console.log('Function: ' + this.name)
            }, 100)
        } // in function, this keyword is scoped at global, 
        // hence will not print name
    }

    let person = new Person('Bob')
    person.printNameArrow()
    person.printNameFunction()
    console.log(this)

// Passing Function As Arguments:
    function print(value) {
        console.log(value)
    }

    function useCallback(callback) {
        callback("Hello")
    }

    useCallback(print)

    // Using arrow function
    useCallback(value => console.log(value)) // anonymous function

// Scoping
    // 1. global scope
    const globalVar = "Global"

    // 2. module scope
    // variables declared in modules

    // 3. function scope
    function test() {
        const b = 2
        // 4. block scope
        if (true) {
            const c = 3 // but var variables are function scoped
            console.log(b,c)
        }
    }
    test()

// Hoisting -> default behavior of moving declarations to the top of current scope
    console.log("sumFunc: " + sumFunc(1,2)) // function call before declaration
    
    function sumFunc(a, b) {
        return (a + b)
    }

    const sumConst = (a, b) => a + b
    console.log("sumConst: " + sumFunc(1,2)) // const & let type can not be called before declaration

    // console.log(num) // undefined
    // var log = 2 // intialized as undefined unless defined

// Closures -> Global variables can be made local (private) with closures
    // Closure is function combined with its outer state / lexical environment stored in heap
    let b = 3;
    function calc(a){
        return a + b;
    }
    console.log(calc(2))