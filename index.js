const $ = require('jquery')

const body = $('body')

body.on('click', () => {
    console.log('clicked')
})

function superSum(a,b) {
    return a + b
}

function mult(a, b) {
    return a * b
}