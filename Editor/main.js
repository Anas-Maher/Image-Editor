const saturate = document.getElementById("sat")
const contrast = document.getElementById("con")
const brightness = document.getElementById("bri")
const sepia = document.getElementById("sep")
const grayscale = document.getElementById("gra")
const Blur = document.getElementById("blur")
const HueRotate = document.getElementById("hue")
const Canvas = document.querySelector("canvas")
const UploadBtn = document.getElementById("upload")
const DownloadBtn = document.getElementById("load")
const Img = document.getElementById("image")
const ResetBtn = document.querySelector("button")
const ImgBox = document.getElementById("img-box")
const CTX = Canvas.getContext("2d")
function Reset() {
    Img.style.filter = "none"
    saturate.value = "100"
    contrast.value = "100"
    brightness.value = "100"
    sepia.value = "100"
    grayscale.value = "0"
    Blur.value = "0"
    sepia.value = "0"
    HueRotate.value = "0"
}
window.onload = function () {
    DownloadBtn.style.display = "none"
    ResetBtn.style.display = "none"
    ImgBox.style.display = "none"
}
UploadBtn.onchange = function () {
    Reset()
    DownloadBtn.style.display = "block"
    ResetBtn.style.display = "block"
    ImgBox.style.display = "block"
    let File = new FileReader()
    File.readAsDataURL(UploadBtn.files[0])
    File.onload = function () {
        Img.src = File.result
    }
    Img.onload = function () {
        Canvas.width = Img.width
        Canvas.height = Img.height
        CTX.drawImage(Img, 0, 0, Canvas.width, Canvas.height)
        Img.style.display = "none"
    }
}
const Filters = document.querySelectorAll("ul li input")
Filters.forEach((Effect) => {
    Effect.addEventListener("input", function name() {
        CTX.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${Blur.value}px)
        hue-rotate(${HueRotate.value}deg)
        `
        CTX.drawImage(Img, 0, 0, Canvas.width, Canvas.height)
    })
})
ResetBtn.onclick = function () {
    saturate.value = "100"
    contrast.value = "100"
    brightness.value = "100"
    sepia.value = "100"
    grayscale.value = "0"
    Blur.value = "0"
    sepia.value = "0"
    HueRotate.value = "0"
    CTX.filter = `
        saturate(100%)
        contrast(100%)
        brightness(100%)
        sepia(0%)
        grayscale(0)
        blur(0px)
        hue-rotate(0deg)
        `
    CTX.drawImage(Img, 0, 0, Canvas.width, Canvas.height)
}
DownloadBtn.onclick = function () {
    DownloadBtn.href = Canvas.toDataURL()
}
