const burger = () => {
    const btn = document.querySelector('#burger')
    const off = document.querySelector('.offset')
    const close = document.querySelector('.offset nav svg')
    let currentImageIndex = 0;
    btn.addEventListener('click', () => {
        off.style.display = 'block'
    })
    close.addEventListener('click', () => {
        off.style.display = 'none'
    })
} 

burger()