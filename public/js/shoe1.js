const sugSlider = document.querySelector('.suggestions');

sugSlider.addEventListener('wheel', (b) => {
    b.preventDefault();
    sugSlider.scrollLeft += b.deltaY;
});

const pen = {
    naem:"narraj",
    price: 99,
    salePrice: 49
}
let i = 0;
let num = 50 ;
for(i, i<=num, i++){
    console.log(i, "= even number")
}wh{
    console.log(i, "= is odd")
}
