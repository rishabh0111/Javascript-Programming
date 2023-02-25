// 1. Select all elements
const form = document.querySelector('#new-item-form')
const list = document.querySelector('#list')
const input = document.querySelector('#item-input')

// 2. When submit, add new element
form.addEventListener('submit', e => {
    e.preventDefault() // prevents page from refresh

    // Create a new item
    const item = document.createElement('div')
    item.innerText = input.value
    item.classList.add('list-item')
    
    // Add item to the list
    list.appendChild(item)

    // Clear input
    input.value = ""

    // Event listener to delete when clicked
    item.addEventListener('click', () => {
        list.removeChild(item)
    })
})