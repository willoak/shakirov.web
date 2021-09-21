let listWrapper = document.querySelector('.list-wrapper')
let listItem = listWrapper.querySelectorAll('.list-item')
let prevBtn  = document.querySelector('#prev')
let nextBtn = document.querySelector('#next')
let countItem = 0;
let valorSlide = 0;
const listITemWidth = listItem[0].offsetWidth
const plusSize = 20;
let listWrapperWidth = ((listITemWidth + plusSize ) * listItem.length)


function next(){
    valorSlide += listITemWidth + plusSize
    if(valorSlide <= (listWrapperWidth - listITemWidth) ) {
        addActiveClass(++countItem)
        listWrapper.style.marginLeft = -valorSlide + 'px'
    } else {
        listWrapper.style.marginLeft = 0
        valorSlide = 0
        addActiveClass(0)
        countItem = 0
    }
}

function prev(){
    if(valorSlide > 0) {
        addActiveClass(--countItem)
        valorSlide -= listITemWidth + plusSize
        listWrapper.style.marginLeft = -valorSlide + 'px'
    }
}

function addActiveClass(item){
    listItem.forEach( item => item.classList.remove('active'))
    if (item < (listItem.length ) ) {
        listItem[item].classList.add('active')
    }
}

function init(){
    listWrapper.style.width = listWrapperWidth + 'px';
    listItem[0].classList.add('active')
    nextBtn.addEventListener('click', next)
    prevBtn.addEventListener('click', prev)
}

init()

// slider Principal

const fullSlideMain = document.querySelector('.slide-main')
const fullSlideMainItem = fullSlideMain.querySelectorAll('.slide-item')
const fullSldeMainControlActive = document.querySelector('#full-slide-active')
const fullSldeMainControlTotal = document.querySelector('#full-slide-total')


fullSldeMainControlActive.innerHTML = '01'
fullSldeMainControlTotal.innerHTML = '0' + fullSlideMainItem.length 