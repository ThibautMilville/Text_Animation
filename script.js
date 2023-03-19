const text = document.querySelector(".sec-text")

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelancer"
    },0);
    setTimeout(() => {
        text.textContent = "Developper"
    },4000);
    setTimeout(() => {
        text.textContent = "Creator"
    },8000);
}

textLoad()
setInterval(textLoad, 12000)