// 1. Adding Elements
    // const body = document.body
    // body.append("Hello World","Bye") // Can add text & html elements
    // 2. Creating Elements
    // const div = document.createElement('div')
    // 3. Modifying Element text
    // div.innerText = "This is div element"
    // div.textContent = "inside div using textcontent"
    // body.appendChild(div) // Can only add html elements
// const div = document.querySelector("div")
// console.log(div.textContent) // Shows everything inside
// console.log(div.innerText) // Shows what is displayed on page
// // 4. Modifying Element HTML
// // div.innerHTML = "<strong>Hello There</strong>" // insecure
// // secure way to prevent cross site scripting
// const strong = document.createElement("strong")
// strong.innerHTML = "Hello Universe"
// div.append(strong)
const body = document.body
const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")
// // 5. Removing Elements
// spanHi.remove()
// div.append(spanHi) // can be added back
// div.removeChild(spanHi)
// 6. Modifying Element Attributes
console.log(spanHi.getAttribute("id"))
console.log(spanHi.id)
console.log(spanHi.title)
spanHi.setAttribute("id","asdf")
spanHi.setAttribute("title","hello")
spanHi.removeAttribute("title")
// 7. Modifying Data Attributes
console.log(spanHi.dataset)
console.log(spanHi.dataset.test)
console.log(spanHi.dataset.longerName)
spanHi.dataset.newName = "hi"
// 8. Modifying Element Classes
const spanYes = document.querySelector("#ye")
spanYes.classList.add("new-class", "another-class")
spanYes.classList.remove("yes1")
spanYes.classList.remove("yes2") // removes if already exists or add if not
// 9. Modifying Element Style
spanYes.style.color = "red"
spanYes.style.backgroundColor = "yellow" // for background-color
