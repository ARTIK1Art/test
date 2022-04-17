const slider = () => {
    const slider1 = new Splide('#mySlider', {
        perPage: 1,
        arrows: true,
    }).mount();
};
slider();

let page = document.querySelector('.body')
let themeButton = document.querySelector('.toggle')

themeButton.onclick = function() {
    page.classList.toggle('darkTheme')
}

new WOW().init();