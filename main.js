// function hatterSzinez() {
//     document.body.style.backgroundColor = 'DarkSeaGreen';
// }
// 
// setTimeout(hatterSzinez, 2000)
// document.body.style.backgroundColor = 'DarkSlateBlue';
// 
// const idoBekezdes = document.getElementById('ido');
// const idoHandle = setInterval(() => {
//     idoBekezdes.textContent = new Date().toLocaleString();
// }, 500)
// 
// document.getElementById("megfagy").addEventListener("click", () => {
//     setTimeout(() => {
//         document.body.style.color = 'yellow';
//     }, 5000)
// })
// 
// document.getElementById('stop').addEventListener('click', () => {
//     clearInterval(idoHandle);
// });

// 1

const szinek = ['Coral', 'Crimson', 'DarkSlateBlue', 'DarkSeaGreen', 'Pink'];
// 
// document.body.style.backgroundColor = szinek[Math.floor(Math.random() * szinek.length)];
// let valasztSzin = setInterval(() => {
//     document.body.style.backgroundColor = szinek[Math.floor(Math.random() * szinek.length)];
// }, 10000)

// 2

let idoNyomva = 0;
let intervall;
document.getElementById('szam').addEventListener('click', () => {
    clearTimeout(intervall);
    const rand = Math.floor(Math.random() * 10000) + 5000
    intervall = setTimeout(() => {
        document.body.style.backgroundColor = szinek[Math.floor(Math.random() * szinek.length)];
        idoNyomva = new Date();
    }, rand)
})

document.getElementById('proba').addEventListener('click', () => {
    const kulonbseg = (new Date()) - idoNyomva;
    let label = document.getElementById('talal');
    if (kulonbseg > 4000) {
        label.textContent = 'Túl korai';
    }
    else {
        label.textContent = kulonbseg + " ms";
    }
})