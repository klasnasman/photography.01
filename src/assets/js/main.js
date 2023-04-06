const flkty = new Flickity('.carousel__content', {
    // options
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    contain: true,
    cellAlign: "left"
});

const carouselStatus = document.querySelector('.carousel__status');
const nextButton = document.querySelector('.button__next');
const previousButton = document.querySelector('.button__prev');

previousButton.addEventListener('click', function () {
    flkty.previous();
});

nextButton.addEventListener('click', function () {
    flkty.next();
});

function updateStatus() {
    const slideNumber = flkty.selectedIndex + 1;
    carouselStatus.textContent = slideNumber + '/' + flkty.slides.length;
}
updateStatus();
flkty.on('select', updateStatus);
