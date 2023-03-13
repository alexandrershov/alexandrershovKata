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

const popUpWindowSwipe = () => {
    if(document.documentElement.clientWidth > 578){
        popupWindowBlur.classList.toggle('blured');
    }
    popUpWindow.classList.toggle('popup-window_invisible');
}

const onClick = (e) => {
    let className = '';
    let buttonName = '';
    let swiperName = '';
    let firstText = '';
    let lastText = '';
    if (e.target == readMore){
        className = 'brands-list_height';
        buttonName = readMore;
        swiperName = swiperWraper;
        firstText = 'Показать все';
        lastText = 'Скрыть';
    } else if (e.target == readMoreType) {
        className = 'brands-list_height';
        buttonName = readMoreType;
        swiperName = swiperWraperBrands;
        firstText = 'Показать все';
        lastText = 'Скрыть';
    } else if (e.target == readMoretext) {
        className = 'invisible';
        buttonName = readMoretext;
        swiperName = text;
        firstText = 'Читать далее';
        lastText = 'Скрыть';
        textmini.classList.toggle('ful-version-text_invisible');
    }
    swiperName.classList.toggle(className);
    if (buttonName.innerText == firstText) {
        buttonName.innerHTML = lastText;
    } else buttonName.innerHTML = firstText;
    buttonName.classList.toggle('grow__onwards_vertical');
};

readMore.onclick = onClick;
readMoreType.addEventListener('click' , onClick);
readMoretext.addEventListener('click' , onClick);
buttonMenu.addEventListener('click' , popUpWindowSwipe);
closeMenu.addEventListener('click' , popUpWindowSwipe);
popupWindowBlur.addEventListener('click' , popUpWindowSwipe);
