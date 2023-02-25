// Type Coercion -> Process of converting value from one type to another
    // to string
    String(123) // explicit
    123 + '' // implicit

    // to boolean
    Boolean(2)    // explicit
    if (2) { }    // implicit due to logical context
    !!2           // implicit due to logical operator
    2 || 'hello'  // implicit due to logical operator
    /* Note: Logical operators such as || and && do boolean conversions internally,
    but actually return the value of original operands, 
    even if they are not boolean */

    Boolean('')           // false
    Boolean(0)            // false     
    Boolean(-0)           // false
    Boolean(NaN)          // false
    Boolean(null)         // false
    Boolean(undefined)    // false
    Boolean(false)        // false
    /* Any value that is not in the list is converted to true, including object,
    function, Array, Date, user-defined type, and so on*/

    // to number
    Number('123')   // explicit
    +'123'          // implicit
    123 != '456'    // implicit
    4 > '5'         // implicit
    5/null          // implicit
    true | 0        // implicit

    Number(null)       // 0
    Number(undefined)  // NaN
    Number(true)       // 1
    Number(false)      // 0
    Number(" 12 ")     // 12
    Number("-12.34")   // -12.34
    Number("\n")       // 0
    Number(" 12s ")    // NaN
    Number(123)        // 123

    null == 0               // false, null is not converted to 0
    null == null            // true
    undefined == undefined  // true
    null == undefined       // true
    NaN !== NaN             // true

// == Vs ===
    console.log(1 == "1") // true
    console.log(1 === "1") // false

// Arrays
    const arr = ["A", "B", "C", "D"]

    console.log(arr[0])
    console.log(arr[3])
    console.log(arr[4])

    console.log(arr.length)

    arr.push("E")
    arr.push(3)
    arr.push([1,2])

    console.log(arr)

// Array Methods
    const items = [
        {name: 'Bike', price: 100},
        {name: 'TV', price: 200},
        {name: 'Album', price: 10},
        {name: 'Book', price: 5},
        {name: 'Phone', price: 500},
        {name: 'Computer', price: 1000},
        {name: 'Keyboard', price: 25}
    ]

    // filter
    const filteredItems = items.filter((item) => {
        return item.price <= 100
    })
    console.log(filteredItems)

    // map
    const itemNames = items.map((item) => {
        return item.name
    })
    console.log(itemNames)

    const itemPrices = items.map(item => item.price)
    console.log(itemPrices)

    // find
    const foundItem = items.find(item => item.name === 'Book')
    console.log(foundItem)

    // forEach
    items.forEach(item => {
        console.log(item.name)
    })

    // some (returns true or false)
    const hasInexpensiveItems = items.some(item => item.price <= 100)
    console.log(hasInexpensiveItems)

    // every (returns true or false)
    const hasEveryInexpensiveItems = items.every(item => item.price <= 100)
    console.log(hasEveryInexpensiveItems)

    // sort
    const sortedByPrice = items.sort((a, b) => a.price - b.price)
    console.log(sortedByPrice)

    const sortedByName = items.sort((a, b) => {
        if(a.name < b.name) return -1;
        return 1;
    })
    console.log(sortedByName)

    // reduce
    const total = items.reduce((currentTotal, item) => item.price + currentTotal, 0)
    console.log(total)

    // includes
    const ar = [1, 2, 3, 4, 5]
    const includesTwo = ar.includes(2)
    console.log(includesTwo)

// Classes & Objects
    class House {
        constructor(color) {
            this.color = color
        }

        getFurniture() {
            return 'sofa'
        }
    }

    const houseObject = new House('red')

    console.log(houseObject.color)
    console.log(houseObject.getFurniture())

// Reference vs Value
    let a = 10
    let b = "Hi"
    let c = [1, 2]
    let d = c
    d.push(3)
    d = [3, 4, 5]
    d.push(6)


    console.log("a = " + a)
    console.log("b = " + b)
    console.log("c = " + c)
    console.log("d = " + d)

// String Template Literal
    // Problem 1:
    const message =
    'This is my\n' +
    '\'first\' message'
    console.log(message)
    
    // Solution
    const another = `This is my 
'first' message`
    console.log(another)

    // Problem 2:
    const nam = 'John'
    const msg = 'Hi ' + nam + ',\nThank you'
    console.log(msg)

    const namee = 'John'
    const anmsg =  `Hi ${namee},
Thank you`
    console.log(anmsg)