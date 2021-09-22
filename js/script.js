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
    listItem.forEach( item => item.classList.remove('active') )
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
const fullSldeMainLine = document.querySelectorAll('.line')
let controlFullSlide = 0;

function changeFullSlide(){
    setInterval( ()=> {
        nextFullSlide()
    }, 5000)
}

function nextFullSlide(){
    fullSlideMainItem.forEach( item => item.classList.remove('active') )
    fullSldeMainLine.forEach( item => item.classList.remove('active') )
    if( controlFullSlide < fullSlideMainItem.length - 1 ) {
        controlFullSlide++
        fullSldeMainLine[controlFullSlide].classList.add('active')
        fullSlideMainItem[controlFullSlide].classList.add('active')
        fullSldeMainControlActive.innerHTML = controlFullSlide + 1
    } else {
        controlFullSlide = 0
        fullSlideMainItem[0].classList.add('active')
        fullSldeMainControlActive.innerHTML = 1
        fullSldeMainLine[0].classList.add('active')
    }
}

function initFullSlide (){
    fullSldeMainControlActive.innerHTML = 1
    fullSldeMainControlTotal.innerHTML = fullSlideMainItem.length 
    fullSlideMainItem[0].classList.add('active')
    fullSldeMainLine[0].classList.add('active')
    changeFullSlide()
}

initFullSlide()