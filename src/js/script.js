const aside = document.getElementById('aside');
const swiperWraper = document.getElementById('swiperWraper');
const buttonMenu = document.getElementById('topBarButtonMenu');
const readMore = document.getElementById('ReadMore');
const readMoretext = document.getElementById('readMoretext');
const text = document.getElementById('text');
const textmini = document.querySelector('.ful-version-text');


const addingStyles = () => {
    if(document.documentElement.clientWidth > 578){
        popupWindowBlur.classList.toggle('blured');
    }
    popUpWindow.classList.toggle('popup-window_invisible');
}

const onClickReadMoreBrands = () => {
    swiperWraper.classList.toggle('brands-list_height');
    if (readMore.innerText == 'Показать все') {
        readMore.innerHTML = 'Скрыть'
    } else readMore.innerHTML = 'Показать все';
    readMore.classList.toggle('grow__onwards_vertical');
}

const onClickReadMoreText = () => {
    textmini.classList.toggle('ful-version-text_invisible');
    text.classList.toggle('invisible');
    if (readMoretext.innerHTML == 'Читать далее'){
        readMoretext.innerHTML = 'Скрыть'
    } else readMoretext.innerHTML = 'Читать далее';
    readMoretext.classList.toggle('grow__onwards_vertical')
}

readMore.onclick = onClickReadMoreBrands;
readMoretext.onclick = onClickReadMoreText;

buttonMenu.addEventListener('click' , addingStyles);
closeMenu.addEventListener('click' , addingStyles);
popupWindowBlur.addEventListener('click' , addingStyles);
