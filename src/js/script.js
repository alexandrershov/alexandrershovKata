// Получение элементов выпадающего меню
const aside = document.getElementById('aside');
const buttonMenu = document.getElementById('topBarButtonMenu');

// Получение элементов первого свайпера
const readMore = document.getElementById('ReadMore');
const swiperWraper = document.getElementById('swiperWraper');

// Получение эелементов второго свайпера
const readMoreType = document.getElementById('ReadMoreType');
const swiperWraperBrands = document.getElementById('swiperWraperBrands');

// Получение эелементов на текст (читать далее)
const readMoretext = document.getElementById('readMoretext');
const text = document.getElementById('text');
const textmini = document.querySelector('.ful-version-text');

const addingStyles = () => {
    if(document.documentElement.clientWidth > 578){
        popupWindowBlur.classList.toggle('blured');
    }
    popUpWindow.classList.toggle('popup-window_invisible');
}

// Функция на кнопку (показать еще) , показать больше текста

const onClickReadMoreText = () => {
    textmini.classList.toggle('ful-version-text_invisible');
    text.classList.toggle('invisible');
    if (readMoretext.innerHTML == 'Читать далее'){
        readMoretext.innerHTML = 'Скрыть'
    } else readMoretext.innerHTML = 'Читать далее';
    readMoretext.classList.toggle('grow__onwards_vertical')
}

// Функция на кнопку (показать еще) первого свайпера

const onClickReadMoreBrands = () => {
    swiperWraper.classList.toggle('brands-list_height');
    if (readMore.innerText == 'Показать все') {
        readMore.innerHTML = 'Скрыть'
    } else readMore.innerHTML = 'Показать все';
    readMore.classList.toggle('grow__onwards_vertical');
}

// Функция на кнопку (показать еще) второго свайпера
const onClickReadMoreBrandsRepairs = () => {
    swiperWraperBrands.classList.toggle('brands-list_height');
    if (readMoreType.innerText == 'Показать все') {
        readMoreType.innerHTML = 'Скрыть'
    } else readMoreType.innerHTML = 'Показать все';
    readMoreType.classList.toggle('grow__onwards_vertical');
}


readMore.onclick = onClickReadMoreBrands;
readMoretext.addEventListener('click' , onClickReadMoreText)
buttonMenu.addEventListener('click' , addingStyles);
closeMenu.addEventListener('click' , addingStyles);
popupWindowBlur.addEventListener('click' , addingStyles);

// Обработчик событий на второй свайпер

readMoreType.addEventListener('click' , onClickReadMoreBrandsRepairs);