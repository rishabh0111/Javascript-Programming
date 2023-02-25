const divs = document.querySelectorAll('div')
// divs.forEach(div => {
//     div.addEventListener('click', () => {
//         console.log("hi")
//     })
// })

// const newDiv = document.createElement('div')
// newDiv.style.width = '200px'
// newDiv.style.height = '200px'
// newDiv.style.backgroundColor = 'purple'
// document.body.append(newDiv) // but new appended div don't have event listener

// Creating event delegation
document.addEventListener('click', e => {
    if(e.target.matches('div')){
        console.log("Hi")
    }
})

const newDiv = document.createElement('div')
newDiv.style.width = '200px'
newDiv.style.height = '200px'
newDiv.style.backgroundColor = 'purple'
document.body.append(newDiv)