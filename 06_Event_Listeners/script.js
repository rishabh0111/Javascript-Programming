const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

// grandparent.addEventListener('click', e => {
//     console.log("Grandparent bubble", e.target)
// })

// // Multiple event listeners can be used
// grandparent.addEventListener('click', e => {
//     console.log("Grandparent capture", e.target)
// },{capture:true})

// // bubbling moves upwards
// parent.addEventListener('click', e => {
//     console.log("Parent bubble", e.target)
//     e.stopPropagation() // to stop event propagation
// })

// // caturing moves downwards
// parent.addEventListener('click', e => {
//     console.log("Parent capture", e.target)
// },{capture:true})

// child.addEventListener('click', e => {
//     console.log("Child capture", e.target)
// },{capture:true})

// child.addEventListener('click', e => {
//     console.log("Child bubble", e.target)
// },{once:true}) // to run event only once

// document.addEventListener('click', e => {
//     console.log("Document bubble")
// })

// document.addEventListener('click', e => {
//     console.log("Document Capture")
// },{capture:true})

grandparent.addEventListener('click', e => {
    console.log("Grandparent bubble")
})

parent.addEventListener('click', printHi)

setTimeout(() => {
    parent.removeEventListener("click", printHi)
}, 2000)

child.addEventListener('click', e => {
    console.log("Child bubble")
})

function printHi() {
    console.log("Hi")
}