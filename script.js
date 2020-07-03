const slide = document.querySelectorAll('.slide')
const slides = document.querySelector('.slider-content').children
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
const circle = document.querySelector('.circle')
let index = 0

btnPrev.addEventListener('click', () => {
    prev()
})

btnNext.addEventListener('click', () => {
    next()
})

function createCircle() {
    clear(circle)
    Array.from(slides).forEach(element => {
        const div = document.createElement('div')
        div.classList.add('circle-element')

        if (element.className === 'slide active') {
            div.classList.add('active')
        }

        circle.appendChild(div)
    })
}


function next() {
    if (index == slides.length - 1) {
        index = 0
    } else {
        index++
    }
    changeSlide()
}

function prev() {
    if (index == 0) {
        index = slides.length - 1
    } else {
        index--
    }
    changeSlide()
}

function changeSlide() {
    Array.from(slides).forEach(e => e.classList.remove('active'))
    slides[index].classList.add('active')
    createCircle()
}

function clear(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

createCircle()