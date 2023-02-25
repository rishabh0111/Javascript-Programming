console.log("hello world")

// Data Types:-

    // Numbers:
    let length = 5
    const pi = 3.14
    let a = 123e5 // 12300000 
    let b = 123e-5 // 0.00123
    let c = BigInt("123456789012345678901234567890")
    console.log(c)

    // Strings:
    let color = "Yellow"
    let lastName = 'Johnson'

    // Booleans:
    let x = true
    let y = false

    // the typeof operator:
    typeof length // Returns "number"
    typeof color // Returns "string"

    // Undefined:
    let car; // Value is undefined, type is undefined
    console.log(car)

    // Empty Values:
    let bike = "" // the typeof is "string"

    // Null Values:
    let truck = null
    console.log(truck)

// Varaible Comparison:-
    let age = 5
    // equal to
    age == 5 // Returns true
    age == "5" // Returns true

    // equal value and equal type
    age === 5 // Returns true
    age === "5" // Returns false

    // not equal
    age != 8 // Returns true
    age != "5" // Returns false

    // not equal value or not equal type
    age !== "5" // Returns true

    age > 8 // Returns false
    age < 8 // Returns true
    age >= 8 // Returns false
    age <= 8 // Returns true 

// Logical Operators:-
    (age < 10 && age > 3) // Returns true
    (age < 10 || age < 3) // Returns true
    !(age == 5) // Returns false

