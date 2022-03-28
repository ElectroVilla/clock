setInterval(setClock, 1000)

const secHand = document.querySelector('[data-sec]')
const minHand = document.querySelector('[data-min]')
const hourHand = document.querySelector('[data-hour]')

const num1 = document.querySelector('[data-1]')
const num2 = document.querySelector('[data-2]')
const num3 = document.querySelector('[data-3]')
const num4 = document.querySelector('[data-4]')
const num5 = document.querySelector('[data-5]')
const num6 = document.querySelector('[data-6]')
const num7 = document.querySelector('[data-7]')
const num8 = document.querySelector('[data-8]')
const num9 = document.querySelector('[data-9]')
const num10 = document.querySelector('[data-10]')
const num11 = document.querySelector('[data-11]')
const num12 = document.querySelector('[data-12]')

// x= 150 + sin(F) - 10*sin(F)sign, y = 150 + cos(F) - 30*cos(F)
function setNumbers(element, degree, sSin, sCos) {
    const rad = degree * 0.01745329251994329576923690768489
    const xVal = Math.sin(rad) * 150 + 150 - (10 * sSin)
    const yVal = Math.cos(rad) * -150 + 150 + (30 * sCos)
        // document.getElementById("sin").innerHTML = Math.sin(rad);
        // document.getElementById("cos").innerHTML = Math.cos(rad);
    element.style.setProperty('--xVal', xVal)
    element.style.setProperty('--yVal', yVal)
}

function setClock() {
    const currentDate = new Date()

    const secondRatio = currentDate.getSeconds() / 60
    const minRatio = (secondRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minRatio + currentDate.getHours()) / 12

    setRotation(secHand, secondRatio)
    setRotation(minHand, minRatio)
    setRotation(hourHand, hourRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()
    /*
    x right --
    y up --
     */
setNumbers(num1, 30, 1.4, 0)
setNumbers(num2, 60, 1.7, -0.15)
setNumbers(num3, 90, 2, -0.5)
setNumbers(num4, 120, 1.8, -0.7)
setNumbers(num5, 150, 1.3, -0.9)
setNumbers(num6, 180, 1, -1)
setNumbers(num7, 210, 0.1, -0.9)
setNumbers(num8, 240, 0, -0.7)
setNumbers(num9, 270, -0.2, -0.5)
setNumbers(num10, 300, 0.2, -0.2)
setNumbers(num11, 330, 1, 0)
setNumbers(num12, 0, 1.4, -0)