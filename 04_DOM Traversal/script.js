function changeColor(element) {
    element.style.backgroundColor = "#333"
}

// // getElementById
// const grandparent = document.getElementById("grandparent-id")
// changeColor(grandparent)

// // getElementsByClassName
// const parents = Array.from(document.getElementsByClassName("parent"))
// parents.forEach(changeColor)

// // querySelector
// const grandparent = document.querySelector(".grandparent")
// changeColor(grandparent)

// const parent = document.querySelector(".parent")
// changeColor(parent)

// // querySelectorAll
// const parents = document.querySelectorAll(".parent")
// parents.forEach(changeColor)

// Selecting Children
// const parents = Array.from(grandparent.children)
// // parents.forEach(changeColor)

// const parentOne = parents[0]
// const children = parentOne.children
// changeColor(children[0])

// Selecting Descendants
// const children = grandparent.querySelectorAll(".child")
// children.forEach(changeColor)

// Selecting Parents
const childOne = document.querySelector("#child-one")
// const parent = childOne.parentElement
// changeColor(parent)

// Selecting Ancestors
const grandparent = childOne.closest(".grandparent")
changeColor(grandparent)

// Next Sibling Element
const childTwo = childOne.nextElementSibling
changeColor(childTwo)

// Previous Sibling Element
changeColor(childTwo.previousElementSibling)