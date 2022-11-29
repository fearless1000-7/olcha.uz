const deadline = 'December 2022 26 00:00'

console.log(deadline);

function getTime(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
        hours = Math.round((t / (1000 * 60 * 60)) % 24),
        minutes = Math.round((t / 1000 / 60) % 60),
        seconds = Math.round((t / 1000) % 60);

    return {
        t,
        hours,
        minutes,
        seconds
    }
}

function setTime(selector, endtime) {
    const timer = document.querySelector(selector),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        updateInt = setInterval(updateTime, 1)


    function updateTime() {
        const t = getTime(endtime)

        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds

        if (t.t <= 0) {
            clearInterval(updateInt)
        }
    }

}

setTime('.timer', deadline)




let grid4 = document.querySelector('.grid4')

for (let i = 0; i <= 7; i++) {
    let content1 = document.createElement('div')
    let left = document.createElement('div')
    let right = document.createElement('div')
    let img = document.createElement('img')
    let p = document.createElement('p')
    let b = document.createElement('b')
    let btn = document.createElement('button')
    let span = document.createElement('span')
    let column = document.createElement('div')
    let magaz = document.createElement('span')
    let button = document.createElement('button')
    let menu = document.createElement('i')

    content1.classList.add('phone1')
    btn.classList.add('buy')
    left.classList.add('left1')
    right.classList.add('right1')
    span.classList.add('material-symbols-outlined')
    span.classList.add('flex5')
    column.classList.add('column')
    magaz.classList.add('material-symbols-outlined')
    menu.classList.add('bx')
    menu.classList.add('bx-heart')
    button.classList.add('buypr')
    

    p.innerHTML = `Смартфон Realme GT  Master  Edition 5G 6/128GB Daybreak blue`
    b.innerHTML = "3 960 000 сум"
    btn.innerHTML = "330 000 сум x 12 мес"
    span.innerHTML = "favorite"
    span.innerHTML = "signal_cellular_alt"
    magaz.innerHTML = "shopping_cart"
    button.innerHTML = "В рассрочку"

    grid4.append(content1)
    content1.append(left, right, menu, column)
    right.append(span)
    left.append(img)
    column.append(p, b, btn)
    content1.append(magaz, button)
}


let slide = document.querySelectorAll('.offer__slide')
let close = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let text = document.querySelector('#current')
let total = document.querySelector('#total')


let slide_next = 0

close.onclick = () => {
    if (slide_next ===-1) {
    } else {
        slide_next--
        shou_slide(slide_next)
    }

}


next.onclick = () => {
    if (slide_next === 4) {
    } else {
        slide_next++
        shou_slide(slide_next)
    }
}



function shou_slide(nc) {

    if (nc >= slide.length) {
        slide_next = 0
    }

    if (nc == -1) {
        slide_next = slide.length - 1
    }
    slide.forEach((slide) => {
        slide.style.display = "none"
    })
    slide[slide_next].style.display = "block"
    text.innerHTML = '0' + (slide_next + 1)
}

shou_slide()
let burgerBTN = document.querySelector('.catalog')
let menuBurger = document.querySelector('.menu-drawer')
let btnClose = menuBurger.querySelector('button')

burgerBTN.onclick = () => {
    menuBurger.classList.add('menu-active')
}
btnClose.onclick = () => {
    menuBurger.classList.remove('menu-active')
}