function hatterSzinez() {
    document.body.style.backgroundColor = 'DarkSeaGreen';
}

setTimeout(hatterSzinez, 2000)
document.body.style.backgroundColor = 'DarkSlateBlue';

const idoBekezdes = document.getElementById('ido');
const idoHandle = setInterval(() => {
    idoBekezdes.textContent = new Date().toLocaleString();
}, 500)

document.getElementById("megfagy").addEventListener("click", () => {
    setTimeout(() => {
        document.body.style.color = 'yellow';
    }, 5000)
})

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(idoHandle);
});