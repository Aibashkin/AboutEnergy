const burger = () => {
    const btn = document.querySelector('#burger')
    const off = document.querySelector('.offset')
    const close = document.querySelector('.offset nav svg')
    btn.addEventListener('click', () => {
        off.style.display = 'block'
    })
    close.addEventListener('click', () => {
        off.style.display = 'none'
    })
} 

const slider = () => {
    const sliderImage = document.querySelectorAll('header footer div img')
    const btnLeft = document.querySelectorAll('header footer #left')
    const btnRight = document.querySelectorAll('header footer #right')
    console.log(sliderImage, btnLeft, btnRight)

    function removeActive(array){
        for (const elem of array) {
           elem.classList.remove('active')
        }
     }

    btnLeft.addEventListener('click', () => {
        removeActive()
        sliderImage[2].classList.add('active')
    })
}

slider()











burger()
