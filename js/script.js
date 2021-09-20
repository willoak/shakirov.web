let listWrapper = document.querySelector('.list-wrapper')
let listItem = document.querySelectorAll('.list-item')
let prevBtn  = document.querySelector('#prev')
let nextBtn = document.querySelector('#next')
let valorSlide = 0;
const listITemWidth = listItem[0].offsetWidth
const plusSize = 20;
let listWrapperWidth = ( (listITemWidth + plusSize ) * listItem.length)


function next(e){
    e.preventDefault();
    valorSlide += listITemWidth + plusSize

    if(valorSlide <= (listWrapperWidth - listITemWidth * 2) ) {
        listWrapper.style.marginLeft = -valorSlide + 'px'
    } else {
        listWrapper.style.marginLeft = 0
        valorSlide = 0
    }
}

function prev(e){
    e.preventDefault();
    if(valorSlide > 0) {
        valorSlide -= listITemWidth + plusSize
        listWrapper.style.marginLeft = -valorSlide + 'px'
    }

}

function init(){
    listWrapper.style.width = listWrapperWidth + 'px';
    nextBtn.addEventListener('click', next)
    prevBtn.addEventListener('click', prev)
}

init()