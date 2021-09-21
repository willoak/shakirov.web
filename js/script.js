let listWrapper = document.querySelector('.list-wrapper')
let listItem = document.querySelectorAll('.list-item')
let prevBtn  = document.querySelector('#prev')
let nextBtn = document.querySelector('#next')
let countItem = 0;
let valorSlide = 0;
const listITemWidth = listItem[0].offsetWidth
const plusSize = 20;
let listWrapperWidth = ( (listITemWidth + plusSize ) * listItem.length)


function next(e){
    e.preventDefault();
    removeActiveClass()

    valorSlide += listITemWidth + plusSize

    addActiveClass(++countItem)

    if(valorSlide <= (listWrapperWidth - listITemWidth) ) {
        listWrapper.style.marginLeft = -valorSlide + 'px'
    } else {
        listWrapper.style.marginLeft = 0
        valorSlide = 0
        addActiveClass(0)
        countItem = 0
    }
}

function prev(e){
    e.preventDefault();
    if(valorSlide > 0) {
        removeActiveClass()
        addActiveClass(--countItem)
        valorSlide -= listITemWidth + plusSize
        listWrapper.style.marginLeft = -valorSlide + 'px'
    }

}

function init(){
    listWrapper.style.width = listWrapperWidth + 'px';
    listItem[0].classList.add('active')
    nextBtn.addEventListener('click', next)
    prevBtn.addEventListener('click', prev)
}

function removeActiveClass(){
    listItem.forEach( item => {
        item.classList.remove('active')
    })
}

function addActiveClass(item){
    console.log(item)
    if (item < (listItem.length ) ) {
        listItem[item].classList.add('active')
    }
}

init()