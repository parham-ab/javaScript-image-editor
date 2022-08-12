// -----------elements-----------
let blurFilter = document.querySelector("#blur");
let contrastFilter = document.querySelector("#contrast");
let hueFilter = document.querySelector("#hue");
let GrayScaleFilter = document.querySelector("#GrayScale");
let sepiaFilter = document.querySelector("#sepia");
let opacityFilter = document.querySelector("#opacity");
let invertFilter = document.querySelector("#invert");
let saturateFilter = document.querySelector("#saturate");
let brightnessFilter = document.querySelector("#brightness");
let noFlipBtn = document.querySelector("#noFlip");
let flipXBtn = document.querySelector("#flipX");
let flipYBtn = document.querySelector("#flipY");
let resetBtn = document.querySelector(".reset");
let uploadBtn = document.querySelector("#upload");
let downloadBtn = document.querySelector(".download");
let choosenImg = document.querySelector(".choosenImg");
let imgBox = document.querySelector(".img-container");
let sliderInputs = document.querySelectorAll(".slider-inputs");
// -----------applying styles-----------
sliderInputs.forEach((item) => {
  item.addEventListener("input", function (e) {
    let allFilters = `grayscale(${GrayScaleFilter.value}%) blur(${blurFilter.value}px) sepia(${sepiaFilter.value}) saturate(${saturateFilter.value}) opacity(${opacityFilter.value}) brightness(${brightnessFilter.value}%) contrast(${contrastFilter.value}%) hue-rotate(${hueFilter.value}deg) invert(${invertFilter.value}%)`;
    choosenImg.style.filter = allFilters;
  });
  resetBtn.addEventListener("click", function (e) {
    // -----------reset img styles-----------
    let resetImgStyles = `grayscale(0%) blur(0px) sepia(0) saturate(1) opacity(1) brightness(100%) contrast(100%) hue-rotate(0deg) invert(0%)`;
    choosenImg.style.filter = resetImgStyles;
    // -----------reset input values-----------
    GrayScaleFilter.value = 0;
    blurFilter.value = 0;
    sepiaFilter.value = 0;
    saturateFilter.value = 1;
    opacityFilter.value = 1;
    brightnessFilter.value = 100;
    contrastFilter.value = 100;
    hueFilter.value = 0;
    invertFilter.value = 0;
    console.log(GrayScaleFilter.value);
    // -----------flip reset-----------
    (noFlipBtn.checked = true), (choosenImg.style.transform = "none");
  });
});
// -----------reset button-----------
// -----------zoom effect-----------
imgBox.addEventListener("mousemove", onZoom);
imgBox.addEventListener("mouseover", onZoom);
imgBox.addEventListener("mouseleave", offZoom);
function onZoom(e) {
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;
  choosenImg.style.transformOrigin = `${x}px ${y}px`;
  choosenImg.style.transform = "scale(2.5)";
}
function offZoom(e) {
  choosenImg.style.transformOrigin = `center center`;
  choosenImg.style.transform = "scale(1)";
}
// -----------upload image-----------
uploadBtn.addEventListener("change", function (e) {
  choosenImg.src = URL.createObjectURL(e.target.files[0]);
});
// -----------flip buttons-----------
// flip x
flipXBtn.addEventListener("click", () => {
  choosenImg.style.transform = "scaleX(-1)";
});
// flip y
flipYBtn.addEventListener("click", () => {
  choosenImg.style.transform = "scaleY(-1)";
});
// no flip
noFlipBtn.addEventListener("click", () => {
  choosenImg.style.transform = "none";
});
