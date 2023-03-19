const text = document.querySelector(".sec-text")

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelancer"
    },0);
    setTimeout(() => {
        text.textContent = "Developer"
    },4000);
    setTimeout(() => {
        text.textContent = "Creator"
    },8000); // 1s = 1000ms
}

textLoad()
setInterval(textLoad, 12000) // Repeat textLoad at the end of it 