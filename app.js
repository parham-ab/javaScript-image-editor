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
// zoom effect
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
// -----------effects-----------
// blur
blurFilter.addEventListener("input", () => {
  choosenImg.style.filter = `blur(${blurFilter.value}px)`;
});
// contrast
contrastFilter.addEventListener("input", () => {
  choosenImg.style.filter = `contrast(${contrastFilter.value}%)`;
});
// hue
hueFilter.addEventListener("input", () => {
  choosenImg.style.filter = `hue-rotate(${hueFilter.value}deg)`;
});
// sepia
sepiaFilter.addEventListener("input", () => {
  choosenImg.style.filter = `sepia(${sepiaFilter.value}%)`;
});
// gray scale
GrayScale.addEventListener("input", () => {
  choosenImg.style.filter = `grayscale(${GrayScale.value}%)`;
});
// opacity
opacityFilter.addEventListener("input", () => {
  choosenImg.style.filter = `opacity(${opacityFilter.value}%)`;
});
// invert
invertFilter.addEventListener("input", () => {
  choosenImg.style.filter = `invert(${invertFilter.value}%)`;
});
// saturate
saturateFilter.addEventListener("input", () => {
  choosenImg.style.filter = `saturate(${saturateFilter.value}%)`;
});
// brightness
brightnessFilter.addEventListener("input", () => {
  choosenImg.style.filter = `brightness(${brightnessFilter.value}%)`;
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
// -----------reset button-----------
resetBtn.addEventListener("click", resetter);
function resetter() {
  // -----------blur reset-----------
  (blurFilter.value = 0), (choosenImg.style.filter = `blurFilter(0px)`);
  // -----------contrast reset-----------
  (contrastFilter.value = 100),
    (choosenImg.style.filter = `contrastFilter(100%)`);
  // -----------hue reset-----------
  (hueFilter.value = 0), (choosenImg.style.filter = `hueFilter(0deg)`);
  // -----------sepia reset-----------
  (sepiaFilter.value = 0), (choosenImg.style.filter = `sepiaFilter(0%)`);
  // -----------grayscale reset-----------
  (GrayScale.value = 0), (choosenImg.style.filter = `GrayScale(0%)`);
  // -----------opacity reset-----------
  (opacityFilter.value = 100),
    (choosenImg.style.filter = `opacityFilter(100%)`);
  // -----------invert reset-----------
  (invertFilter.value = 0), (choosenImg.style.filter = `invertFilter(0%)`);
  // -----------saturate reset-----------
  (saturateFilter.value = 100),
    (choosenImg.style.filter = `saturateFilter(100%)`);
  // -----------brightness reset-----------
  (brightnessFilter.value = 100),
    ((choosenImg.style.filter = `brightness(100%)`),
    // -----------flip reset-----------
    (noFlipBtn.checked = true)),
    (choosenImg.style.transform = "none");
}
